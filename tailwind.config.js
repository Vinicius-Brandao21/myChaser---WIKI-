/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gc: {
                    dark: '#1a1a24', // Fundo principal escuro
                    card: '#2c2c3e', // Fundo dos cards
                    primary: '#d4af37', // Dourado GC (para destaques e bordas)
                    text: '#e2e8f0' // Texto claro padrão
                }
            }
        },
    },
    plugins: [],
}