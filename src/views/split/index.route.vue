<template>
  <ice-split-panes max-size="70%">
    <ice-split-panes slot="left" horizontal reversed min-size="20%" initial-size="20%">
      <div slot="top" class="content color-a">top</div>

      <ice-split-panes slot="bottom">
        <div slot="left" class="content color-b">left</div>

        <div slot="right" class="content color-c">right</div>
      </ice-split-panes>
    </ice-split-panes>

    <ice-split-panes slot="right" horizontal>
      <ice-split-panes slot="top">
        <div slot="left" class="content color-d">left</div>

        <ice-split-panes slot="right">
          <div slot="left" class="content color-e">left</div>

          <div slot="right" class="content color-f">right</div>
        </ice-split-panes>
      </ice-split-panes>

      <div slot="bottom" class="content color-g">bottom</div>
    </ice-split-panes>
  </ice-split-panes>
</template>

<script>
export default {
  name: 'index.route',
  title: '分割面板',
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.color-a {
  background-color: #08979c;
}
.color-b {
  background-color: #531dab;
}
.color-c {
  background-color: #52c41a;
}
.color-d {
  background-color: #1d39c4;
}
.color-e {
  background-color: #fa541c;
}
.color-f {
  background-color: #9e1068;
}
.color-g {
  background-color: #ad6800;
}
</style>
