const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// webpack中所有的配置信息都应该写在module.exports中
module.exports = {
  mode: 'development',
  // 指定入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在目录
  output: {
    // 指定打包文件目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的文件
    filename: "bundle.js"
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生成的文件
        test: /\.ts$/,
        // 要使用的loader
        use: "ts-loader",
        // 要排除的文件
        exclude: /node-modules/

      }
    ]
  },
  // 配置webpack插件
  plugins: [
    // new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "自定义标题",
      // 自定义htm模板
      template: "./src/index.html"
    }),
  ],
  //用来设置引入模块
  resolve: {
    extensions: ['.ts', '.js']
  }

};