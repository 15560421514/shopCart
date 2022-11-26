const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: {'^/api':""},
      }
    }
  }
})

// module.exports = {
  
//   lintOnSave: false,
//   devServer: {
//     proxy: {
//       '/api1': {
//         target: 'http://127.0.0.1:8090',
//         pathRewrite: {'^/api1':""},
//       }
//     }
//   }
// }
