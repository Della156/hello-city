<template>
  <ice-basic-layout horizontal>
    <!-- 左侧logo+菜单 -->
    <ice-layout-aside fixed collapsible>
      <ice-logo-panel slot="header">
        <img slot="logo" src="../assets/Fire.svg" alt="" />
        <div slot="title">中台论坛管理系统</div>
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
        <ice-tabs-view transition />
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
          id: 'component',
          title: '运维中心',
          icon: 'el-icon-discount',
          children: [
            { id: 'id_2', title: '分页表格', route: '/table' },
            { id: 'id_3', title: '日期选择器', route: '/datepicker' },
            { id: 'id_4', title: '分割面板', route: '/split' },
          ],
        },
        { id: 'tab', title: '工作流', route: '/detail', icon: 'el-icon-shopping-bag-1' },
        {
          id: 'nested',
          title: '路由嵌套',
          route: '/nested',
          icon: 'el-icon-folder-opened',
        },
        { id: 'ech', title: '系统设置', route: '/setting', icon: 'el-icon-setting' },
        {
          id: '404',
          title: '404页面',
          icon: 'el-icon-warning-outline',
        },
        { id: 'in', title: '使用说明', route: '/declare', icon: 'el-icon-question' },
      ],
    }
  },
}
</script>
