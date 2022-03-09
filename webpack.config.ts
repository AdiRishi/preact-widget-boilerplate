import { Configuration } from 'webpack';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config: Configuration = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'widget.js',
    clean: true,
  },
  mode: 'production',
  target: 'browserslist',
  devtool: false,
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsFilename: path.resolve(__dirname, '.webpack/bundleStats.json'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;
