import React from "react";
import PropTypes from "prop-types";
import { login } from "../utils/auth";
function Login(props) {
  console.log(props);
  const loginHandle = () => {
    login();
    props.history.replace("/ours");
  };
  return (
    <div>
      <ul>
        <li>
          <input type="text" placeholder="请输入用户名" />
        </li>
        <li>
          <input type="password" placeholder="请输入密码" />
        </li>
        <li>
          <button onClick={loginHandle}>登录</button>
        </li>
      </ul>
    </div>
  );
}

Login.propTypes = {
  userName: PropTypes.string
};

export default Login;
