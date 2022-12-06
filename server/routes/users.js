/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-03 22:48:48
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-06 12:55:34
 * @FilePath: \react-admin\server\routes\users.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/login", function (req, res, next) {
  res.send({
    code: 200,
    data: {
      username: "admin",
      role: [1],
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0OTNkNDUxLWYzMjYtNDVjYi1hYWU2LWIzYjFjMTY3Njg5YiIsImlhdCI6MTY3MDE0NjUxMH0.0zw7UMkaEoV6gbW1FoiGIfY167bm38oVBLdwJJl5J1U",
    },
  });
});

module.exports = router;
