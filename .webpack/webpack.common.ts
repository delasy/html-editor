import * as path from 'path'
import * as webpack from 'webpack'
import ForkTSCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const config: webpack.Configuration = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, '../src/'),
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    environment: {
      arrowFunction: false,
      const: false,
      destructuring: false,
      forOf: false
    },
    filename: 'index.min.js',
    globalObject: 'this',
    library: {
      amd: 'html-editor',
      commonjs: 'html-editor',
      root: 'HTMLEditor'
    },
    libraryExport: 'default',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist/')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ForkTSCheckerWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
}

export default config
