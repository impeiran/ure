import babel from 'rollup-plugin-babel'
import glob from 'glob'

import { PROD_MODULE } from './constants'


export default {
  input: glob.sync('src/*/[^_]*.js'),
  plugins: [babel()],
  output: {
    dir: PROD_MODULE,
    format: 'cjs',
    chunkFileNames: 'internal/[name].js'
  }
}