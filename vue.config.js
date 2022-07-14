const publicPath = process.env.NODE_ENV === 'production' ? '' : './';
const path = require('path');
module.exports = {
  outputDir: './dist',
  publicPath: publicPath,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // 这个是绝对路径,不能使用 alias中配置的别名路径，如@表示的src
        path.resolve(__dirname, './src/assets/css/index.less')
      ]
    }
  },
  configureWebpack: {
    resolve: {
      /* 配置别名 */
      alias: {
        components: '@/components',
        views: '@/views',
        router: '@/router',
        utils: '@/utils',
        service: '@/service',
        assets: '@/assets',
        store: '@/store'
      }
    }
  },
  chainWebpack: (config) => {
    // 移除 prefetch 插件,解决组件懒加载失效的问题
    config.plugins.delete('prefetch');
    // 添加新的svg-sprite-loader处理svgIcon
    config.module
      .rule('svgIcon')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap((options) => {
        options = {
          symbolId: 'icon-[name]'
        };
        return options;
      });

    // 原有的svg图像处理loader添加exclude
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, 'src/assets/icons'))
      .end();
  }
};
