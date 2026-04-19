import { useCallback, useRef, useState, useEffect } from 'react';

interface ImageUploadProps {
    value: File | null;
    onChange: (file: File | null) => void;
    currentImage?: string | null;
    aspectRatio?: number;
    label?: string;
    error?: string;
    hint?: string;
}

interface CropState {
    x: number;
    y: number;
    width: number;
    height: number;
}

function CropModal({
    imageSrc,
    aspectRatio,
    onConfirm,
    onCancel,
}: {
    imageSrc: string;
    aspectRatio?: number;
    onConfirm: (croppedFile: File) => void;
    onCancel: () => void;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [crop, setCrop] = useState<CropState>({ x: 0, y: 0, width: 0, height: 0 });
    const [dragging, setDragging] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [displaySize, setDisplaySize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            imgRef.current = img;
            const maxW = 600;
            const maxH = 450;
            let dw = img.width;
            let dh = img.height;
            if (dw > maxW) { dh = dh * (maxW / dw); dw = maxW; }
            if (dh > maxH) { dw = dw * (maxH / dh); dh = maxH; }
            setDisplaySize({ width: Math.round(dw), height: Math.round(dh) });

            let cw = Math.round(dw * 0.8);
            let ch = Math.round(dh * 0.8);
            if (aspectRatio) {
                if (cw / ch > aspectRatio) {
                    cw = Math.round(ch * aspectRatio);
                } else {
                    ch = Math.round(cw / aspectRatio);
                }
            }
            const cx = Math.round((dw - cw) / 2);
            const cy = Math.round((dh - ch) / 2);
            setCrop({ x: cx, y: cy, width: cw, height: ch });
            setImageLoaded(true);
        };
        img.src = imageSrc;
    }, [imageSrc, aspectRatio]);

    useEffect(() => {
        if (!imageLoaded || !canvasRef.current || !imgRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, displaySize.width, displaySize.height);
        ctx.drawImage(imgRef.current, 0, 0, displaySize.width, displaySize.height);

        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(0, 0, displaySize.width, crop.y);
        ctx.fillRect(0, crop.y + crop.height, displaySize.width, displaySize.height - crop.y - crop.height);
        ctx.fillRect(0, crop.y, crop.x, crop.height);
        ctx.fillRect(crop.x + crop.width, crop.y, displaySize.width - crop.x - crop.width, crop.height);

        ctx.strokeStyle = '#E30613';
        ctx.lineWidth = 2;
        ctx.strokeRect(crop.x, crop.y, crop.width, crop.height);

        ctx.fillStyle = '#E30613';
        const hs = 6;
        const corners = [
            [crop.x, crop.y],
            [crop.x + crop.width, crop.y],
            [crop.x, crop.y + crop.height],
            [crop.x + crop.width, crop.y + crop.height],
        ];
        corners.forEach(([cx, cy]) => {
            ctx.fillRect(cx - hs / 2, cy - hs / 2, hs, hs);
        });
    }, [imageLoaded, crop, displaySize]);

    const getMousePos = (e: React.MouseEvent) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return { x: 0, y: 0 };
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const isNearCorner = (mx: number, my: number) => {
        const t = 12;
        const br = { x: crop.x + crop.width, y: crop.y + crop.height };
        return Math.abs(mx - br.x) < t && Math.abs(my - br.y) < t;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const pos = getMousePos(e);
        if (isNearCorner(pos.x, pos.y)) {
            setResizing(true);
            setDragStart(pos);
        } else if (
            pos.x >= crop.x && pos.x <= crop.x + crop.width &&
            pos.y >= crop.y && pos.y <= crop.y + crop.height
        ) {
            setDragging(true);
            setDragStart({ x: pos.x - crop.x, y: pos.y - crop.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        const pos = getMousePos(e);
        if (dragging) {
            let nx = pos.x - dragStart.x;
            let ny = pos.y - dragStart.y;
            nx = Math.max(0, Math.min(nx, displaySize.width - crop.width));
            ny = Math.max(0, Math.min(ny, displaySize.height - crop.height));
            setCrop(c => ({ ...c, x: nx, y: ny }));
        } else if (resizing) {
            let nw = Math.max(40, pos.x - crop.x);
            let nh = Math.max(40, pos.y - crop.y);
            if (aspectRatio) {
                if (nw / nh > aspectRatio) {
                    nw = nh * aspectRatio;
                } else {
                    nh = nw / aspectRatio;
                }
            }
            nw = Math.min(nw, displaySize.width - crop.x);
            nh = Math.min(nh, displaySize.height - crop.y);
            setCrop(c => ({ ...c, width: Math.round(nw), height: Math.round(nh) }));
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
        setResizing(false);
    };

    const handleConfirm = () => {
        if (!imgRef.current) return;
        const outCanvas = document.createElement('canvas');
        const scaleX = imgRef.current.width / displaySize.width;
        const scaleY = imgRef.current.height / displaySize.height;
        const realCrop = {
            x: crop.x * scaleX,
            y: crop.y * scaleY,
            width: crop.width * scaleX,
            height: crop.height * scaleY,
        };
        outCanvas.width = Math.round(realCrop.width);
        outCanvas.height = Math.round(realCrop.height);
        const ctx = outCanvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(
            imgRef.current,
            realCrop.x, realCrop.y, realCrop.width, realCrop.height,
            0, 0, outCanvas.width, outCanvas.height,
        );
        outCanvas.toBlob((blob) => {
            if (blob) {
                const file = new File([blob], 'cropped.jpg', { type: 'image/jpeg' });
                onConfirm(file);
            }
        }, 'image/jpeg', 0.92);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onCancel}>
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-[#111] p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
                <h3 className="text-lg font-bold text-white">Recortar Imagem</h3>
                <p className="text-sm text-gray-400">Arraste para mover, arraste o canto inferior direito para redimensionar</p>
                {imageLoaded && (
                    <canvas
                        ref={canvasRef}
                        width={displaySize.width}
                        height={displaySize.height}
                        className="cursor-crosshair rounded-lg"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    />
                )}
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-lg border border-white/10 px-5 py-2 text-sm text-gray-300 transition-colors hover:bg-white/5"
                    >
                        Cancelar
                    </button>
                    <button
                        type="button"
                        onClick={handleConfirm}
                        className="rounded-lg bg-[#E30613] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#c00510]"
                    >
                        Aplicar Recorte
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ImageUpload({
    value,
    onChange,
    currentImage,
    aspectRatio,
    label,
    error,
    hint,
}: ImageUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [showCrop, setShowCrop] = useState(false);
    const [rawFile, setRawFile] = useState<File | null>(null);

    useEffect(() => {
        if (value) {
            const url = URL.createObjectURL(value);
            setPreview(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setPreview(null);
        }
    }, [value]);

    const handleFile = useCallback((file: File) => {
        if (!file.type.startsWith('image/')) return;
        setRawFile(file);
        setShowCrop(true);
    }, []);

    const handleSkipCrop = useCallback(() => {
        if (rawFile) {
            onChange(rawFile);
            setShowCrop(false);
            setRawFile(null);
        }
    }, [rawFile, onChange]);

    const handleCropConfirm = useCallback((croppedFile: File) => {
        onChange(croppedFile);
        setShowCrop(false);
        setRawFile(null);
    }, [onChange]);

    const handleCropCancel = useCallback(() => {
        setShowCrop(false);
        setRawFile(null);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) handleFile(file);
    }, [handleFile]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
        if (inputRef.current) inputRef.current.value = '';
    }, [handleFile]);

    const displayImage = preview || (currentImage
        ? (currentImage.startsWith('http') || currentImage.startsWith('/assets')
            ? currentImage
            : `/storage/${currentImage}`)
        : null);

    const handleRemove = () => {
        onChange(null);
        setPreview(null);
    };

    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-sm font-medium text-gray-300">{label}</label>}

            {displayImage ? (
                <div className="group relative inline-block">
                    <img
                        src={displayImage}
                        alt="Preview"
                        className="h-48 w-auto rounded-xl border border-white/10 object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-xl bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                        <button
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                        >
                            Trocar
                        </button>
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="rounded-lg bg-red-600/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-red-600"
                        >
                            Remover
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-10 transition-all duration-200 ${
                        isDragOver
                            ? 'border-[#E30613] bg-[#E30613]/5'
                            : 'border-white/15 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04]'
                    }`}
                    onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                    onDragLeave={() => setIsDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current?.click()}
                >
                    <div className={`rounded-full p-3 transition-colors ${isDragOver ? 'bg-[#E30613]/10' : 'bg-white/5'}`}>
                        <svg className={`h-8 w-8 ${isDragOver ? 'text-[#E30613]' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-gray-300">
                            {isDragOver ? 'Solte a imagem aqui' : 'Arraste uma imagem ou clique para selecionar'}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">PNG, JPG, WEBP até 10MB</p>
                    </div>
                </div>
            )}

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleInputChange}
                className="hidden"
            />

            {hint && !error && <p className="text-xs text-gray-500">{hint}</p>}
            {error && <p className="text-xs text-red-400">{error}</p>}

            {showCrop && rawFile && (
                <CropModal
                    imageSrc={URL.createObjectURL(rawFile)}
                    aspectRatio={aspectRatio}
                    onConfirm={handleCropConfirm}
                    onCancel={handleCropCancel}
                />
            )}
            {showCrop && rawFile && (
                <div className="fixed bottom-8 left-1/2 z-[60] -translate-x-1/2">
                    <button
                        type="button"
                        onClick={handleSkipCrop}
                        className="rounded-lg border border-white/20 bg-[#222] px-4 py-2 text-sm text-gray-300 shadow-xl transition-colors hover:bg-[#333]"
                    >
                        Pular recorte — usar imagem original
                    </button>
                </div>
            )}
        </div>
    );
}
