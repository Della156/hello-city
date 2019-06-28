<template>
  <!-- 表格 -->
  <ice-table-page
    background
    tabIndex
    :data.sync="tableInfo.data"
    :refresh="tableInfo.refresh"
    :init-currentPage="tableInfo.initCurrentPage"
    :api="getListApi"
    :field-list="tableInfo.fieldList"
    :handle="tableInfo.handle"
    @handleClick="handleClick"
    @handleEvent="handleEvent"
  />
</template>
<script>
export default {
  name: 'tablePage',
  title: 'tablePage',

  data() {
    return {
      // 表格相关
      tableInfo: {
        refresh: 1,
        initCurrentPage: 1,
        data: [],
        fieldList: [
          { label: '日期', prop: 'date', Width: 180 },
          { label: '姓名', prop: 'name', width: 200 },
          { label: '地址', prop: 'address' },
        ],
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
    this.getList()
  },

  methods: {
    getListApi(params) {
      return this.$http({
        url: '/api/article/getList',
        method: 'get',
        params,
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
      }
    },
  },
}
</script>
