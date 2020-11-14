import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import glob from 'glob'

import { PROD_MODULE_ES } from './_constants'
// import { IOptions } from 'rollup-plugin-typescript2/dist/ioptions'


export default {
  input: glob.sync('src/*/[^_]*.js').concat(['src/index.ts']),
  plugins: [typescript({
    allowNonTsExtensions: true
  }), babel()],
  output: {
    dir: PROD_MODULE_ES,
    format: 'es',
    chunkFileNames: 'internal/[name].js'
  }
}