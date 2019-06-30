<template>
  <div class="box">
    <div class="header">
      <label for="nested-second">Second</label>
      <input id="nested-second" placeholder="second" />
      <router-link to="/nested/first/second/third">Goto Third!</router-link>
    </div>
    <ice-router-view class="view" transition />
  </div>
</template>

<script>
export default {
  name: 'second.route',
  title: 'Second',
}
</script>

<style lang="less" scoped>
.box {
  background-color: #b7eb8f;
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
