import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, transformWithEsbuild } from 'vite';
import restart from 'vite-plugin-restart';
import path from 'path';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        root: 'src/',
        publicDir: '../public/',
        define: {
            'process.env': env,
        },
        resolve: {
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@stores': path.resolve(__dirname, 'src/stores'),
                '@helpers': path.resolve(__dirname, 'src/helpers'),
                '@libs': path.resolve(__dirname, 'src/libs'),
            },
        },
        plugins: [
            // Restart server on static/public file change
            restart({ restart: ['../public/**'] }),

            // React support
            react(),

            // .js file support as if it was JSX
            {
                name: 'load+transform-js-files-as-jsx',
                async transform(code, id) {
                    if (!id.match(/src\/.*\.js$/)) return null;

                    return transformWithEsbuild(code, id, {
                        loader: 'jsx',
                        jsx: 'automatic',
                    });
                },
            },
        ],
        server: {
            host: true, // Open to local network and display URL
            open: !(
                'SANDBOX_URL' in process.env ||
                'CODESANDBOX_HOST' in process.env
            ), // Open if it's not a CodeSandbox
        },
        build: {
            outDir: '../dist', // Output in the dist/ folder
            emptyOutDir: true, // Empty the folder first
            sourcemap: true, // Add sourcemap
        },
    };
});
