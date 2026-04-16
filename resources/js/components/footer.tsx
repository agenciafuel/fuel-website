import { Button } from './ui/button';

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="w-[80%]">
                <div>
                    <div>
                        <span>adorariamos trabalhar</span>
                        <span>com você e seu time.</span>
                        <Button>envie uma mensagem</Button>
                    </div>

                    <div>
                        <span>+55 18 3928-4555</span>
                        <span>Rua Tenente Nicolau Maffei, 1190</span>
                        <span>Centro, 19010-250</span>
                        <span>Pres. Prudente / SP - Brasil</span>
                    </div>
                </div>
                <div>
                    <div>
                        se inscreva nos nossos canais
                    </div>
                </div>
            </div>
        </footer>
    );
}
