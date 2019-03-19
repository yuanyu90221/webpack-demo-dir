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
      filename: `${path.join(__dirname,'dist','index.html')}`,
      template: './src/index.html',
      title: 'My App'
    })
  ]
}
module.exports = (env, argv ) =>{
  if (argv.mode && (argv.mode === 'production' || argv.mode === 'development' )) {
    config.mode = argv.mode;
  } else {
    config.mode = 'development';
  }
  if (config.mode==='development') {
    config.devtool = 'source-map';
  } else {
    config.devtool = null;
  }
  return config;
};