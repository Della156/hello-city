<template>
  <div class="box">
    <div class="header">
      <label for="nested-third">Third</label>
      <input id="nested-third" placeholder="third" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'third.route',
  title: 'Third',
}
</script>

<style lang="less" scoped>
.box {
  background-color: #95de64;
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
