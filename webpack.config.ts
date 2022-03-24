import { Configuration } from 'webpack';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// set NODE_ENV if not specified
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}
const isDevelopment = process.env.NODE_ENV !== 'production';

const nodeModulesRegex = /node_modules/;
const tsRegex = /\.(ts|tsx)$/;
const imageAssetRegex = /\.(avif|bmp|gif|jpe?g|png)$/;
const styleSheetRegex = /\.css$/;

const config: Configuration = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: 'MyWidget',
    libraryTarget: 'umd',
  },
  mode: isDevelopment ? 'development' : 'production',
  target: 'browserslist',
  devtool: false,
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat', // Must be below test-utils
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, '.webpack/bundleStats.json'),
    }),
    new HtmlWebpackPlugin({
      title: 'Widget Test',
      template: path.resolve(__dirname, 'src/client-template.ejs'),
      minify: !isDevelopment,
    }),
  ].concat(isDevelopment ? [] : [new MiniCssExtractPlugin()]),
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  module: {
    rules: [
      {
        test: tsRegex,
        exclude: nodeModulesRegex,
        use: 'ts-loader',
      },
      {
        test: imageAssetRegex,
        exclude: nodeModulesRegex,
        type: 'asset',
        generator: {
          filename: 'media/images/[hash][ext][query]',
        },
      },
      {
        test: styleSheetRegex,
        exclude: nodeModulesRegex,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', { stage: 3 }]],
              },
            },
          },
        ],
      },
    ],
  },
};

export default config;
