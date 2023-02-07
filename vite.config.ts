const path = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const dts = require('vite-plugin-dts');

const packageJson = 'accordion';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(), dts(
    {
      staticImport: true,
      rollupTypes: true,
      insertTypesEntry: true
    }
  )],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: packageJson,
      fileName: (format) => `${packageJson}.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});