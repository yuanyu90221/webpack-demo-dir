const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let config = {
  // package entry point
  entry: {
    index: './src/index.js'
  },
  output: {
    // final packaged name
    filename: 'bundle.js',
    // final package path
    path: path.resolve('./dist/')
  },
  plugins: [
    new HtmlWebpackPlugin({
      entry: './src/index.html',
      filename: `${path.join(__dirname,'dist','index.html')}`,
      template: './src/index.html',
      title: 'My App'
    })
  ]
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
  if (config.mode==='development') {
    config.devtool = 'source-map';
  } else { 
    config.devtool = 'nosources-source-map';
  }
  return config;
};