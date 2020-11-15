import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import { name, version, author, homepage } from '../package.json';

const banner = `
/**
 * ${name}
 * version: ${version}
 * author: ${author},
 * homepage: ${homepage}
 */
`;

const plugins = [
  babel(),
  typescript()
];

export default {
  input: 'src/index.ts',
  output: [
    {
      name,
      banner,
      file: `dist/${name}.js`,
      format: 'umd',
    },
    {
      name,
      banner,
      file: `dist/${name}.min.js`,
      format: 'umd',
      sourcemap: true,
      plugins: [terser()]
    }
  ],
  plugins
};
