const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, './src/index.js'),
  output: {
    filename: 'lightbox.js',
    path: resolve(__dirname, './dist/')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ParallelUglifyPlugin({
      uglifyJS: {
        output: {
          comments: false
        },
        warnings: true,
        compress: {
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true
        }
      },
      cacheDir: ''
    })
  ]
}
