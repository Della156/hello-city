<template>
  <ice-basic-layout horizontal>
    <!-- 左侧logo+菜单 -->
    <ice-layout-aside fixed collapsible>
      <ice-logo-panel slot="header">
        <img slot="logo" src="../assets/logo.png" alt="" />
        <div slot="title">中后台管理系统</div>
      </ice-logo-panel>

      <ice-aside-menu :menu-items="items" router />
    </ice-layout-aside>

    <!-- 右侧主体内容 -->
    <ice-layout>
      <ice-layout-header>
        <nav-bar />
      </ice-layout-header>

      <ice-layout-content>
        <!-- 页签路由视图 -->
        <ice-tabs-view transition scrollable />
      </ice-layout-content>
    </ice-layout>
  </ice-basic-layout>
</template>

<script>
import NavBar from '../components/NavBar/index'

export default {
  name: 'index.route',
  redirect: '/dashboard',
  components: { NavBar },

  data() {
    return {
      items: [
        {
          id: 'id_1',
          title: '首页',
          route: '/dashboard',
          icon: 'el-icon-house',
        },
        {
          id: 'sub',
          title: '文档',
          icon: 'el-icon-notebook-1',
        },
        { id: 'tab', title: '笔记', route: '/detail', icon: 'el-icon-set-up' },
        {
          id: 'component',
          title: '组件案例',
          icon: 'el-icon-s-promotion',
          children: [
            { id: 'id_2', title: '分页表格', route: '/table' },
            { id: 'id_3', title: '日期选择器', route: '/datepicker' },
            { id: 'id_4', title: '分割面板', route: '/split' },
          ],
        },
        {
          id: 'icon',
          title: '图标',
          route: '/icons',
          icon: 'el-icon-picture-outline-round',
        },
        { id: 'ech', title: '图表', route: '/chart', icon: 'el-icon-s-grid' },
        { id: 'in', title: '引导', route: '/lead', icon: 'el-icon-lollipop' },
        {
          id: 'route',
          title: '路由嵌套',
          route: '/nested',
          icon: 'el-icon-sugar',
        },
      ],
    }
  },
}
</script>
