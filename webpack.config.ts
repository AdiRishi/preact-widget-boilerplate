import { Configuration } from 'webpack';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const nodeModulesRegex = /node_modules/;
const tsRegex = /\.(ts|tsx)$/;
const imageAssetRegex = /\.(avif|bmp|gif|jpe?g|png)$/;
const styleSheetRegex = /\.css$/;

const config: Configuration = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'media/images/[hash][ext][query]',
    clean: true,
    library: 'MyWidget',
    libraryTarget: 'umd',
  },
  mode: 'production',
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
    }),
  ],
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
      },
      {
        test: styleSheetRegex,
        exclude: nodeModulesRegex,
        use: [
          'style-loader',
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
