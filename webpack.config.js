const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * The Webpack Config.
 * This is barebones, so feel free to add to this to make your life a little easier.
 */ 
const settings = {
  mode: 'production',
  context: __dirname,
  target: 'web',
  entry: {
    'scripts': path.resolve(__dirname, `./build/index.js`),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, `./`),
    publicPath: `/`,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            }
          }
        ],
      },
      // Babel loader for es6 support
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/transform-react-jsx',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ]
};

module.exports = settings;