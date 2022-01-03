const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
	performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
				test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
			{
				type: "asset",
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
			},
    ],
  },
  mode: 'production',
};
