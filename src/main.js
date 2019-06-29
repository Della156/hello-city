import icefox from 'icefox'

// 基础接口主机地址
const baseURL = process.env.app_base_url

// axios 实例配置
const requestPluginOptions = {
  baseURL,
  baseParams: {
    baseUrl: baseURL,
  },
}

// element-ui 全局配置
const elementUIOptions = {}

// 单页应用的vue实例配置
export default {
  title: 'IceFox Demo Site',

  plugins: [
    [icefox, elementUIOptions], // 将icefox作为应用插件使用
    ['request', requestPluginOptions], // 对内置的request插件进行配置
  ],

  router: {
    mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  },
}
