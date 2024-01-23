const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/vite-plugin-keepr.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/vite-plugin-keep.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/vite-plugin-keep.umd.js',
      format: 'umd',
      name: 'VitePluginKeep',
      sourcemap: true
    }
  ],
  plugins: [
    typescript(),
    resolve(),
    commonjs()
  ],
  external: ['vue']
};
