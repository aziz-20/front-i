const { resolve } = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({

  
 
  configureWebpack: {
    devServer: {
      host:process.env.VUE_APP_URL ,
      port: process.env.VUE_APP_PORT,
      open: true,
      proxy: {
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        [process.env.VUE_APP_API_BASE_URL]: {
          target: `${process.env.VUE_APP_API_URL}:${process.env.VUE_APP_API_PORT}`,
          ws: true,                                    //代理webSocket
          changeOrigin: true,                          //允许跨域
          
         
        }
      },
     
    },
    resolve: {
      alias: {
        '@': resolve('src')
      },
      fallback: {
        path: require.resolve('path-browserify')
      }
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
    },

  transpileDependencies: ['@vue/reactivity']
});

