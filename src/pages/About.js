import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import { getProducts } from "../services/products";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentPage: 1
    };
  }
  componentDidMount() {
    this.loadMore();
  }
  async loadMore() {
    console.log(this.refs);
    // 通过refs可以获取页面中设置了ref属性的标签
    // findDOMNode可以返回指定节点的html对象,通过ref属性对应的关键字进行处理
    //this.refs.myBtn.style.color = "red";
    console.log(findDOMNode(this.refs.myBtn));
    const result = await getProducts(this.state.currentPage);
    this.setState({
      currentPage: this.state.currentPage + 1,
      list: result.data.products
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(p => (
            <li key={p._id}>{p.name}</li>
          ))}
        </ul>
        <button ref="myBtn" onClick={this.loadMore.bind(this)}>
          加载更多
        </button>
      </div>
    );
  }
}
