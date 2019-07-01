<template>
  <div class="wrapper">
    <el-button type="danger" circle @click="logout" class="btn">退</el-button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  padding-right: 8px;
}

.btn {
  height: 32px;
  width: 32px;
  padding: 0;
}
</style>
