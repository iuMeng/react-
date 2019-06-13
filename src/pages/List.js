import React, { useState, useEffect } from "react";
// import axios from "axios";
import { getProducts } from "../services/products";
import { Link } from "react-router-dom";
/**
 * useState 可以设置function定义组件的局部状态
 * useEffect 可以模拟class定义组件中的生命周期函数
 *  使用响应,可以监听指定数据改变之后触发
 */
function List() {
  const [currentPage, setCurrentPage] = useState(1);
  const [count, changeCount] = useState(1);
  const [list, changeList] = useState([]);
  useEffect(() => {
    console.log("初始化的时候执行一次");
  }, []);
  useEffect(() => {
    console.log("执行了");
  });
  useEffect(() => {
    console.log("当前页面改变了");
    //1.第一种，直接写
    // axios
    //   .get("https://api.cat-shop.penkuoer.com/api/v1/products", {
    //     params: {
    //       page: currentPage
    //     }
    //   })
    //   .then(res => {
    //     console.log(res.data);
    //     changeList(res.data.products);
    //   });
    //第二种，封装后写法
    // getProducts(currentPage).then(res => {
    //   changeList(res.data.products);
    // });
    // 第三种 使用async  await
    async function fetchData() {
      const result = await getProducts(currentPage);
      changeList(result.data.products);
    }
    fetchData();
  }, [currentPage]);
  return (
    <div>
      <h1>我是列表页</h1>
      <p>当前页码为：{currentPage}</p>
      <button onClick={() => changeCount(count + 1)}>改变count</button>
      <ul>
        {list.map(p => (
          <li key={p._id}>
            <Link to={{ pathname: `/list/${p._id}?id=${p._id}` }}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage(currentPage + 1)}>加载更多</button>
    </div>
  );
}

export default List;
