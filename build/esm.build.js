import babel from 'rollup-plugin-babel'
import glob from 'glob'

import { PROD_MODULE_ES } from './_constants'


export default {
  input: glob.sync('src/*/[^_]*.js').concat(['src/index.js']),
  plugins: [babel()],
  output: {
    dir: PROD_MODULE_ES,
    format: 'es',
    chunkFileNames: 'internal/[name].js'
  }
}