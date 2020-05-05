import babel from 'rollup-plugin-babel'
import glob from 'glob'

import { PROD_MODULE } from './_constants'


export default {
  input: glob.sync('src/*/[^_]*.js').concat(['src/index.js']),
  plugins: [babel()],
  output: {
    dir: PROD_MODULE,
    format: 'cjs',
    chunkFileNames: 'internal/[name].js'
  }
}