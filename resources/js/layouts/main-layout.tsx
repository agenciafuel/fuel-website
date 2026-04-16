export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="font-roboto min-h-screen bg-black antialiased">
            {children}
        </div>
    );
}
