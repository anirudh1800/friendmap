module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  devtool: "source-map",
  devServer: {
      inline: true,
      port: 8080
   },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ],
     preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
     ]
  },
  externals: {
        "react": "React",
        "react-dom": "ReactDOM"
  }
}