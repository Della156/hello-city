<template>
  <ice-split-panes max-size="70%">
    <div slot="left">A</div>
    <ice-split-panes slot="right" horizontal>
      <ice-split-panes slot="top">
        <div slot="left">B</div>
        <div slot="right">C</div>
      </ice-split-panes>

      <div slot="bottom">D</div>
    </ice-split-panes>
  </ice-split-panes>
</template>

<script>
export default {
  name: 'detail',
  title: '工作流',
}
</script>

<style scoped></style>
