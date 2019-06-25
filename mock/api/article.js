/* eslint-disable */

// http://mockjs.com/examples.html
import Mock from "mockjs";

//
//
export const delay = 0;
export const disabled = false;
//


//
export default {
  //
  "GET /api/article/getList": (req, res, next) => {
    const { id } = params
    return Mock.mock({
      "Data|20-100": [
        {
          date: '@date("yyyy-MM-dd")',
          name: "@cname(2, 4)",
          address: "@county(true)",
          currentPage: params.currentPage,
          flag: "@boolean"
        }
      ],
      count() {
        return this.Data.length;
      }
    });
  }
};
