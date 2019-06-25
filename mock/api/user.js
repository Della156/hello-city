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
  "GET /api/user/info": (req, res, next) => {
    return Mock.mock({ name: "@cname(2, 4)" });
  }
};
