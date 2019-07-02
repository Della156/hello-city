<template>
  <div class="container">
    <!-- 条件栏 -->
    <ice-page-filter
      :query.sync="filterInfo.query"
      :filter-list="filterInfo.list"
      :list-type-info="listTypeInfo"
      @handleClick="handleClick"
      @handleEvent="handleEvent"
    />
    <!--    表格 -->
    <ice-page-table
      background
      tabIndex
      :data.sync="tableInfo.data"
      :checked-list="tableInfo.checkedList"
      :refresh="tableInfo.refresh"
      :init-currentPage="tableInfo.initCurrentPage"
      :api="getListApi"
      :query="filterInfo.query"
      :field-list="tableInfo.fieldList"
      :handle="tableInfo.handle"
      @handleClick="handleClick"
      @handleEvent="handleEvent"
    />
  </div>
</template>

<script>
export default {
  name: 'tableData',
  title: '数据管理',

  data() {
    return {
      // 过滤相关配置
      filterInfo: {
        query: {
          name: '',
          tag_id: '',
        },
        list: [
          {
            type: 'select',
            label: '城市',
            value: 'tag_id',
            list: 'tagTypeList',
          },
          { type: 'input', label: '昵称', value: 'name' },
          {
            type: 'button',
            label: '搜索',
            btType: 'primary',
            icon: 'el-icon-search',
            event: 'search',
            show: true,
          },
          {
            type: 'button',
            label: '添加',
            btType: 'primary',
            icon: 'el-icon-plus',
            event: 'create',
            show: true,
          }
        ],
      },
      // 相关列表
      listTypeInfo: {
        tagTypeList: [],
      },

      // 表格相关
      tableInfo: {
        refresh: 1,
        initCurrentPage: 1,
        data: [],
        fieldList: [
          { label: '日期', prop: 'date', Width: 180 },
          { label: '姓名', prop: 'name', width: 200 },
          { label: '城市', prop: 'province' },
        ],
        checkedList: [],
        handle: {
          fixed: 'right',
          label: '操作',
          width: '200',
          btList: [
            {
              label: '查看',
              type: 'primary',
              icon: 'el-icon-browse',
              event: 'view',
              show: true,
            },
            {
              label: '删除',
              type: 'danger',
              icon: 'el-icon-delete',
              event: 'delete',
              show: true,
              ifRender(row) {
                return row.flag === true
              },
            },
          ],
        },
      },
    }
  },

  mounted() {
    this.initList()
    this.getList()
  },

  methods: {
    initList() {
      const listTypeInfo = this.listTypeInfo
      this.getAllApi().then((res) => {
        if (res.status === 200) {
          listTypeInfo.tagTypeList = res.data.content.map((item, index) => {
            return {
              key: item,
              value: Boolean(index) + 1,
            }
          })
        } else {
          this.$message({
            showClose: true,
            message: '获取城市失败',
            type: res.status === 200 ? 'success' : 'error',
            duration: 2000,
          })
        }
      })
    },

    getListApi(params) {
      return this.$http({
        url: '{baseUrl}/getList',
        method: 'get',
        params,
      })
    },

    getAllApi() {
      return this.$http({
        url: '{baseUrl}/getCity',
        method: 'get',
      })
    },

    // 获取列表
    getList() {
      /*而组件内部watch字段change，重新调获取数据的接口，即可实现刷新功能*/
      // 刷新表格
      this.tableInfo.refresh = Math.random()
    },

    // 按钮点击
    handleClick(event, data) {
      const tableInfo = this.tableInfo
      switch (event) {
        // 搜索
        case 'search':
          // 重置分页
          tableInfo.initCurrentPage = Math.random()
          tableInfo.refresh = Math.random()
          break
        // 创建
        case 'create':
          alert('弹出添加框')
          break
        // 查看和编辑
        case 'view':
          this.$message('查看查看')
          break
        // 删除
        case 'delete':
          this.$message('删掉你')
          break
      }
    },

    // 触发事件
    handleEvent(event, data) {
      switch (event) {
        // 对表格获取到的数据做处理
        case 'list':
          if (!data) return
          data.forEach((item) => {
            this.$set(item, 'statusLoading', false)
          })
          break
        // 表格的复选框选中事件
        case 'tableCheck':
          this.tableInfo.checkedList = data.map((item) => item.name)
          break
        // 选中日期时间
        case 'evnet':
          alert('选中时间～')
          break
      }
    },
  },
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
