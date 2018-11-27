import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import url from 'rollup-plugin-url'
import json from 'rollup-plugin-json';
import globals from 'rollup-plugin-node-globals';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],  
  external: ['react', 'react-dom', 'axios'],
  plugins: [
    globals(),
    json(),
    url(),
    babel({
        exclude: 'node_modules/**'
    }),
    resolve({ preferBuiltins: false }),
    commonjs()
  ]
}