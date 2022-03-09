import { Configuration } from 'webpack';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config: Configuration = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'media/images/[hash][ext][query]',
    clean: true,
  },
  mode: 'production',
  target: 'browserslist',
  devtool: false,
  resolve: {
    extensions: ['.ts', '.tsx'],
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
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: [/\.avif$/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
      },
    ],
  },
};

export default config;
