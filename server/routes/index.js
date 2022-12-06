/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-03 22:48:48
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-06 12:55:12
 * @FilePath: \react-admin\server\routes\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({
    code: 200,
    data: {},
    msg: "hello world",
  });
});

module.exports = router;
