<template>
  <div class="home">
    <HelloWorld :msg="msg" />
    <input />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  title: '首页',
  nocache: true,
  components: { HelloWorld },

  data() {
    return {
      msg: 'Welcome!',
    }
  },

  async created() {
    // 发送请求，加载用户信息
    const user = await this.$http.get(`{baseUrl}/api/user/info`).data
    // 更新并显示问候语
    this.msg = `${user.name}, Welcome!`
  },
}
</script>
