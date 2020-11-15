import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import glob from 'glob'

import { PROD_MODULE } from './_constants'


export default {
  input: glob.sync('src/*/[^_]*.ts').concat(['src/index.ts']),
  plugins: [babel(), typescript()],
  output: {
    dir: PROD_MODULE,
    format: 'cjs',
    chunkFileNames: 'internal/[name].js'
  }
}