const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {

    entry: './src/main/javascript/app/index.js',

    // output: {
    //     path: __dirname + '/src/main/resources/javascript/apps/',
    //     filename: "[name].js"
    // },

    resolve: {
        mainFields: ['module', 'main'],
        extensions: ['.mjs', '.js', '.jsx', 'json']
    },

    module: {
      rules: [
          {
              test: /\.mjs$/,
              include: /node_modules/,
              type: "javascript/auto",
          },
          {
              test: /\.jsx?$/,
              // include: [path.join(__dirname, "src")],
              loader: 'babel-loader',
              query: {
                  presets: [
                      ['@babel/preset-env', {modules: false, targets: {safari: '7', ie: '10'}}],
                      '@babel/preset-react'
                  ],
                  plugins: [
                      "lodash"
                  ]
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [{
                  loader: 'file-loader',
                  options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                  }
              }]
          }
      ]
    },

    plugins: [htmlPlugin],

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    mode: 'development'
};
