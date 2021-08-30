//引用path模組
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
      //這個webpack打包的對象，這裡面加上剛剛建立的index.js
     app: './src/index.jsx',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
     }),
   ],
   output: {
     //這裡是打包後的檔案名稱
     filename: '[name].bundle.js',
     //打包後的路徑，這裡使用path模組的resolve()取得絕對位置，也就是目前專案的根目錄
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
 };