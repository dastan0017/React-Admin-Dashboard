/* craco.config.js */

const path = require("path");

module.exports = {
	plugins: [
		{
			plugin: {
				overrideWebpackConfig: ({ webpackConfig, context: { paths } }) => {
					webpackConfig.resolve.alias = {
						...webpackConfig.resolve.alias,
						Assets: path.resolve(__dirname, `${paths.appSrc}/assets/`),
						Styles: path.resolve(__dirname, `${paths.appSrc}/styles/`),
						Stores: path.resolve(__dirname, `${paths.appSrc}/stores/`),
						Components: path.resolve(__dirname, `${paths.appSrc}/components/`),
						Containers: path.resolve(__dirname, `${paths.appSrc}/containers/`),
						Views: path.resolve(__dirname, `${paths.appSrc}/views/`),
						Pages: path.resolve(__dirname, `${paths.appSrc}/pages/`),

						// All I need is to add here vaiable and path so that I can use it anywhere in the App
						Core: path.resolve(__dirname, `${paths.appSrc}/core/`),
						Internal$: path.resolve(__dirname, `${paths.appSrc}/internal.js`),
					};

					return webpackConfig;
				},
			},
			options: {
				// preText: "Will log the webpack config:"
			},
		},
	],
};
