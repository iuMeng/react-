import React from "react";
//import logo from "./logo.svg";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NB from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Ours from "./pages/Ours";
import List from "./pages/List";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import HocRoute from "./components/HocRouter";
import "./App.css";
const NeedLogin = HocRoute(Route); //临时变量
// import AppNavigator from "./AppNavigator";
// Router 是路由的上层节点，所有使用路由跳转的组件都在其内
//  每一个路由链接对应的组件使用Route进行跳转
//  页面跳转的时候使用Link组件实现
// const Home = () => <h1>我是首页</h1>;
// const About = () => <h1>我是关于我们</h1>;
// const Ours = () => <h1>我是个人中心</h1>;
// const List = () => <h1>我是商品列表</h1>;
function App() {
  return (
    <Router>
      <div className="App">
        <NB />
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/ours" component={Ours}> */}
            {/* <AppNavigator /> */}
            {/* </Route> */}
            <Route exact path="/list" component={List} />
            <Route exact path="/login" component={Login} />
            {/* <HocR component={Login} path="/login" userName="123" /> 高阶组件*/}
            <NeedLogin component={Ours} path="/ours" />
            <Route path="/list/:id" component={Detail} />
            <Route path="/products/:tag?" component={Products} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
