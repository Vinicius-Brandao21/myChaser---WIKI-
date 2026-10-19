import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="bg-gc-card border-b border-gc-primary/30 p-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gc-primary tracking-wider">
                    GC Classic Wiki
                </Link>

                {/* Menu Desktop */}
                <div className="hidden md:flex gap-6 font-semibold">
                    <Link to="/personagens" className="hover:text-gc-primary transition-colors">Personagens</Link>
                    <Link to="/mapas" className="hover:text-gc-primary transition-colors">Mapas</Link>
                    <Link to="/eventos" className="hover:text-gc-primary transition-colors">Eventos</Link>
                </div>

                {/* Botão Mobile */}
                <button className="md:hidden text-gc-primary">
                    <Menu size={28} />
                </button>
            </div>
        </nav>
    );
}