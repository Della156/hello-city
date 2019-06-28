/* eslint-disable */
// http://mockjs.com/examples.html
import Mock from 'mockjs' //
//

export const delay = 0
export const disabled = false //
//

const articleData = Mock.mock({
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
})

export default {
  //
  'GET /api/article/getList': (req, res, next) => {
    const { query } = req
    const { currentPage, pageSize } = query
    const starIndex = (currentPage - 1) * pageSize
    const lastIndex = starIndex + Number(pageSize)
    const Data = articleData.Data.slice(starIndex, lastIndex)
    const count = articleData.count
    return {
      Data,
      count,
      currentPage: Number(currentPage),
      pageSize: Number(pageSize)
    }
  },
}
