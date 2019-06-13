import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { isLogined } from "../utils/auth";
/**
 * 高阶组件
 *  在react中使用一个组件当做参数传递到另外一个组件
 *  这种操作方式叫做高阶组件
 * @param {*} Page
 */

// 在没有用Route对象管理的组件中无法使用history属性，可以通过withRouter方法为组件添加此属性
export default function HocRouter(Page) {
  return withRouter(
    class WrapComponent extends Component {
      constructor(props) {
        super(props);
        console.log(props);
      }
      componentDidMount() {
        if (!isLogined()) {
          this.props.history.replace("/login");
        }
      }
      render() {
        return <Page {...this.props} />;
      }
    }
  );
}
