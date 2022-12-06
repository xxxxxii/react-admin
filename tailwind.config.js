/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 16:48:50
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-04 19:52:15
 * @FilePath: \react-admin\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  // purge: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
