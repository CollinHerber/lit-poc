import { defineConfig } from 'vite';
import { resolve } from 'path';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';

const entryPoints = glob.sync('src/**/*.ts').reduce((acc, file) => {
    // Exclude *.stories.ts files
    if (!file.endsWith('.stories.ts') && !file.endsWith('.test.ts')) {
        const name = file.replace('src/', '').replace('.ts', '');
        acc[name] = resolve(__dirname, file);
    }
    return acc;
}, {});

export default defineConfig({
    exclude: ['**/*.stories.tsx'],
    build: {
        rollupOptions: {
            treeshake: true,
            input: {
                index: resolve(__dirname, 'src/index.ts'),
                ...entryPoints
            },
            output: {
                entryFileNames: ({ name }) => {
                    return name === 'index' ? 'index.js' : `${name}.js`;
                },
                chunkFileNames: 'assets/index-chunk.js',
                assetFileNames: 'assets/[name].[ext]',
            },
        },
    },
    plugins: [
        dts({ outDir: 'dist/types' }),
    ],
    optimizeDeps: {
        include: ['raw-loader'],
    },
});
