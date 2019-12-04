const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ExtensionReloader = require('webpack-extension-reloader');

module.exports = {
  entry: {
    app: './src/index.tsx',
    content: './src/content.tsx',
    background: './src/background.ts',
  },
  output: {
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true},
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      chunks: ['app'],
    }),
    new HtmlWebPackPlugin({
      template: './public/background.html',
      filename: './background.html',
      chunks: ['background'],
    }),
    new HtmlWebPackPlugin({
      template: './public/content.html',
      filename: './content.html',
      chunks: ['content'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ExtensionReloader({
      manifest: path.resolve(__dirname, './public/manifest.json'),
    }),
    new CopyPlugin([{from: './public/manifest.json', to: 'manifest.json'}]),
  ],
};
