/* eslint-disable */
// http://mockjs.com/examples.html
import Mock from 'mockjs' //
//

export const delay = 0
export const disabled = false //
//
export default {
  //
  'GET /api/article/getList': (req, res, next) => {
    const { query } = req
    const { currentPage, pageSize } = query
    return Mock.mock({
      'Data|40-200': [
        {
          date: '@date("yyyy-MM-dd")',
          name: '@cname(2, 4)',
          address: '@county(true)',
          flag: '@boolean',
        },
      ],

      count() {
        return this.Data.length
      },

      currentPage() {
        return +currentPage
      },

      pageSize() {
        return +pageSize
      },
    })
  },
}
