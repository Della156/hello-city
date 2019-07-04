/* eslint-disable */
// http://mockjs.com/examples.html
import Mock from 'mockjs' //
//

export const delay = 0
export const disabled = false //
//

const token = Mock.mock('@id')

export default {
  //
  'POST /api/user/login': (req, res, next) => ({
    token,
  }),

  'POST /api/user/logout': (req, res, next) => '',
}
