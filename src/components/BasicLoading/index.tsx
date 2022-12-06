/*
 * @Author: yulinZ 1973329248@qq.com
 * @Date: 2022-12-04 15:13:21
 * @LastEditors: yulinZ 1973329248@qq.com
 * @LastEditTime: 2022-12-04 16:13:48
 * @FilePath: \react-admin\src\components\BasicLoading\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ReactDOM from "react-dom/client";
import Loading from "./loading";

let loadingCount = 0;

export const openLoading = () => {
  if (loadingCount === 0) {
    let dom = document.createElement("div");
    dom.setAttribute("id", "basic-loading");
    document.body.appendChild(dom);
    ReactDOM.createRoot(dom).render(<Loading />);
  }
  loadingCount++;
};

export const closeLoading = () => {
  if (loadingCount <= 0) return;
  loadingCount--;
  if (loadingCount === 0) {
    document.body.removeChild(
      document.getElementById("basic-loading") as HTMLElement
    );
  }
};
