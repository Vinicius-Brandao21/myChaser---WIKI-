import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8">
                <Outlet /> {/* É aqui dentro que as páginas vão aparecer */}
            </main>
            <footer className="text-center p-4 border-t border-gc-primary/20 text-sm text-gray-500 mt-auto">
                Grand Chase Classic Wiki © {new Date().getFullYear()} - Projeto de Portfólio
            </footer>
        </div>
    );
}