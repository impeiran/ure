import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

let plugins = [
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js']
  })
]

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'faa',
      file: 'dist/faa.js',
      format: 'umd',
    },
    {
      name: 'faa',
      file: 'dist/faa.min.js',
      format: 'iife',
      plugins: [terser()]
    }
  ],
  plugins
};