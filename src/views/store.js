import Cookies from 'js-cookie'

export default {
  state: {
    token: Cookies.get('token'),
  },

  actions: {
    // 登入
    async login({ commit, call }, payload) {
      const { username, password } = payload
      const { token } = await call('POST api/user/login', {
        contentType: 'urlencoded',
        data: {
          username: username.trim(),
          password: password,
        },
      }).data

      commit('setToken', token)
      Cookies.set('token', token)
    },

    // 登出
    async logout({ commit, call }) {
      await call('POST api/user/logout')
      commit('setToken', '')
      Cookies.remove('token')
    },
  },

  mutations: {
    setToken(state, token) {
      state.token = token
    },
  },
}
