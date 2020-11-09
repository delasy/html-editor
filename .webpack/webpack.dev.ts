import * as webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { merge } from 'webpack-merge'

import common from './webpack.common'

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    injectClient: false,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      scriptLoading: 'blocking',
      templateContent: ({ htmlWebpackPlugin }) => {
        return `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <title>Document</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              ${htmlWebpackPlugin.tags.headTags as string}
            </head>
            <body style="margin: 0;">
              <div id="root" style="height: 100vh; left: 0; position: fixed; top: 0; width: 100vw;"></div>
              ${htmlWebpackPlugin.tags.bodyTags as string}
              <script>
                var config = []
                new HTMLEditor(config).mount('#root')
              </script>
            </body>
          </html>
        `
      }
    })
  ]
})

export default config
