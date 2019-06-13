import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
/**
 * NavLink 在选中之后会自动的添加一个样式名叫active
 *  我们可以手动的为其设置样式名,通过属性activeClassName
 *
 */
function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <img
            src="https://b-ssl.duitang.com/uploads/item/201504/24/20150424H0457_RELWy.thumb.80_80_c.jpeg"
            alt="logo"
          />
        </li>
        <li>
          <NavLink exact to={{ pathname: "/" }}>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/list" }}>列表页</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/about" }}>关于我们</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: "/ours" }}>个人中心</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
