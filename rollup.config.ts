import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { babel } from '@rollup/plugin-babel'
import packageJson from './package.json'

const entry = 'src/index.ts'

export default [
  {
    input: entry,
    plugins: [
      typescript(),
      babel({ babelHelpers: 'bundled' })
    ],
    output: [
      {
        file: packageJson.module,
        sourcemap: true,
        format: 'esm'
      },
      {
        file: packageJson.main,
        sourcemap: true,
        format: 'cjs'
      },
      {
        name: packageJson.name,
        file: packageJson.unpackaged,
        sourcemap: true,
        format: 'umd',
      },
    ]
  },
  {
    input: entry,
    plugins: [dts()],
    output: [
      {
        file: packageJson.types,
        format: 'esm'
      }
    ]
  }
]