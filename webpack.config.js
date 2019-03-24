const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let config = {
  // package entry point
  entry: {
    index: './src/index.js'
  },
  output: {
    // final packaged name
    filename: '[name].bundle.js',
    // final package path
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        use: [
          {
              loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${path.join(__dirname,'dist','index.html')}`,
      template: './src/index.html',
      title: 'My App',
      meta: {
        'theme-color': '#4285f4'
      },
      favicon: `${path.join(__dirname,'assets','icon-square-big.png')}`
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ], //devServer Setup
  devServer: {
    port: 9000
  }
}
module.exports = (env, argv) =>{
  // 根據 是否有 --mode=production來判別是否要compile成 production
  // https://webpack.js.org/concepts/mode/#usage
  if (argv.mode && (argv.mode === 'production' || argv.mode === 'development' )) {
    config.mode = argv.mode;
  } else {
    config.mode = 'development';
  }
  // 設定是否有 source map https://webpack.docschina.org/configuration/devtool/
  if (config.mode=='development') {
    config.devtool = 'source-map';
  } else { 
    config.devtool = 'none';
  }
  return config;
};