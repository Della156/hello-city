const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  lintOnSave: !isProd,
  pluginOptions: {
    preprocess: {
      appNestedRoutes: 'auto',
      codeSplittingExclude: '/views/(login|index|dashboard)',
    },
    // 构建服务配置
    services: {
      mock: true, // 启用mock服务
      theme: 'src/theme/var.less', // 主题变量定义文件
      svgIcon: 'src/assets/icons', // 启用项目svg图标构建
    },
  },
}
