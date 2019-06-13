import React from "react";
import avatars from "../assets/images/inf.gif";
import { Link, Route } from "react-router-dom";
import { loginOut } from "../utils/auth";
import PWD from "./user/PWD";
import INF from "./user/Info";
function Ours(props) {
  const loginOutHandle = () => {
    loginOut();
    props.history.replace("/");
  };
  return (
    <div>
      <h1>我是个人中心</h1>
      <div className="info">
        <img src={avatars} alt="猫咪" />
        <h5>姓名：猫咪</h5>
        <Link to={{ pathname: "/ours/pwd" }}>【修改密码】</Link>
        <Link to={{ pathname: "/ours/info" }}>【修改昵称】</Link>
      </div>
      <Route path="/ours/pwd" component={PWD} />
      <Route path="/ours/info" component={INF} />
      <button onClick={loginOutHandle}>退出登录</button>
    </div>
  );
}

export default Ours;
