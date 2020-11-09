import * as webpack from 'webpack'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import { merge } from 'webpack-merge'

import common from './webpack.common'
import packageInfo from '../package.json'

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false,
        parallel: true,
        terserOptions: {
          format: {
            comments: false,
            preamble: '/*!\n' +
              ` * HTMLEditor v${packageInfo.version}\n` +
              ' * Copyright (c) 2020 Aaron Delasy\n' +
              ` * Licensed under ${packageInfo.license}\n` +
              ' */'
          }
        }
      })
    ]
  }
})

export default config
