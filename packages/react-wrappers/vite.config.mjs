import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
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
        viteStaticCopy({
            targets: [
                {
                    src: 'node_modules/@salesforce-ux/design-system/assets/icons/**-sprite/**',
                    dest: '../public/_slds/icons',
                },
            ],
        }),
    ],
    optimizeDeps: {
        include: ['raw-loader'],
    },
    test: {
        browser: {
            enabled: true,
            name: 'chrome',
            provider: 'webdriverio',
            viewport: {width: 1280, height: 720},
        },
        exclude: [
            '**/*.stories.tsx',
            '**/node_modules/**',
        ],
        coverage: {
            reporter: ['text', 'json', 'html', 'json-summary'],
            provider: 'istanbul',
            exclude: [
                '**/node_modules/**',
                '**/dist/**',
                '**/cypress/**',
                '**/.{idea,git,cache,output,temp}/**',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
                '**/src/**/*.{stories,test}.{ts,tsx}',
                '**/scripts/**',
                '**/.storybook-gator/**',
                '**/.storybook-slds/**',
                '**/src/utils/storybook-utils.ts',
                '**/src/utils/vitest-utils.ts',
                '**/src/components/icon/gator/templates/**'
            ],
            reportOnFailure: true,
            thresholds: {
                lines: 60,
                branches: 50,
                functions: 70,
                statements: 60
            }
        },
    },
});
