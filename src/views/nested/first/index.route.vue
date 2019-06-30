<template>
  <div class="box">
    <div class="header">
      <label for="nested-first">First</label>
      <input id="nested-first" placeholder="first" />
      <router-link to="/nested/first/second">Goto Second!</router-link>
    </div>
    <ice-router-view class="view" transition />
  </div>
</template>

<script>
export default {
  name: 'first.route',
  title: 'First',
}
</script>

<style lang="less" scoped>
.box {
  background-color: #d9f7be;
  padding: 12px;
}

.header {
  label,
  a {
    font-size: 24px;
  }

  label,
  input,
  a {
    margin-right: 12px;
    display: inline-block;
    vertical-align: middle;
  }
}

.view {
  padding: 20px;
  margin: 12px 0;
}
</style>
