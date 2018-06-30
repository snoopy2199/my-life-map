module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/theme.scss";',
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'raw-loader',
        },
      ],
    },
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
};
