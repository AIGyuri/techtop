import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
    test: {
        environment: 'jsdom', // Ez biztosítja, hogy a React Testing Library működjön
        globals: true, // Így nem kell minden fájlban importálni a `test`-et
        setupFiles: './vitest.setup.js' // Itt adjuk hozzá
    },
});
