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
        format: 'esm'
      },
      {
        file: packageJson.main,
        format: 'cjs'
      },
      {
        name: packageJson.name,
        file: packageJson.unpackaged,
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