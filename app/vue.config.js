/*
 * @Author: your name
 * @Date: 2022-01-26 20:53:15
 * @LastEditTime: 2022-03-13 14:05:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project.SPH\app\vue.config.js
 */
module.exports = {
    productionSourceMap: false,
    //打包的时候删除map文件
    lintOnSave: false,
    //代理跨越
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
                // pathRewrite: { '^/api': '' },
            },
        },
    },
}
