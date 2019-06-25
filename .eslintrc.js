// 是否产品环境
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-debugger': isProd ? 'warn' : 'off',
    'no-console': isProd ? 'warn' : 'off',
    'no-unused-vars': isProd ? 'off' : 'warn',
    'no-empty': isProd ? 'off' : 'warn',
    'vue/no-unused-vars': isProd ? 'off' : 'warn',
    'vue/valid-v-for': isProd ? 'off' : 'warn',
    'vue/require-v-for-key': isProd ? 'off' : 'warn',
    'vue/no-use-v-if-with-v-for': isProd ? 'off' : 'warn',
    quotes: [isProd ? 'off' : 'warn', 'single'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
