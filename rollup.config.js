import npm from 'rollup-plugin-npm';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import pascalCase from 'pascal-case';

export default {
  entry: 'src/index.js',
  dest: 'lib/index.js',
  sourceMap: true,
  format: 'umd',
  moduleName: pascalCase(require('./package.json').name),
  plugins: [
    npm({ jsnext: true }),
    commonjs(),
    babel(),
    uglify(),
  ],
};
