import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'), // 如果 __dirname 不可用，可以尝试使用 new URL() 替代
      name: '@mind-elixir/export-xmind',
      // the proper extensions will be added
      fileName: 'export-xmind',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['file-saver', 'jszip'],
      output: {
        exports: 'named', // 如果你决定只使用命名导出
        globals: {
          'file-saver': 'fileSaver',
          'jszip': 'JSZip',
        },
      },
    },
  },
});

