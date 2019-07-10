<template>
  <div class="lead">
    <h1>关于</h1>
    <p>github地址</p>
    <ul>
      <li>
        <a href="https://github.com/utryfe/icefox">Icefox</a><br /><br />
        <a href="https://utryfe.github.io/icefox-docs/">在线学习文档1</a>
      </li>
      <li>
        <a href="https://github.com/utryfe/icefox-site">Demo</a><br /><br />
        <a href="https://utryfe.github.io/icefox-docs/component/installation.html"
          >在线学习文档2</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'declare',
  title: '使用说明',
}
</script>

<style scoped>
ul li {
  margin-bottom: 20px;
}
a {
  color: #1890ff;
}
a:link {
  text-decoration: none;
}
a:hover {
  color: #ccc;
}
a:active {
  color: #1890ff;
}
</style>
