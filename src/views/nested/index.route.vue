<template>
  <div class="nested">
    <ice-breadcrumb-view />
  </div>
</template>

<script>
export default {
  name: 'nested',
  redirect: 'first',
  title: '路由嵌套',
}
</script>

<style lang="less" scoped>
.box {
  background-color: #f6ffed;
  padding-bottom: 20px;
}
</style>
