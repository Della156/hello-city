module.exports = {
  lintOnSave: false,
  pluginOptions: {
    preprocess: {
      appNestedRoutes: "auto"
    },
    // 构建服务配置
    services: {
      mock: true, // 启用mock服务
      theme: "src/theme/var.less",
      svgIcon: true
    }
  }
};
