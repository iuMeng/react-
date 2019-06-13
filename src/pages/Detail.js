import React, { Component } from "react";
import { parse, stringify } from "qs";
export default class Detail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log(props.match.url);
    console.log(props.match.params.id);
    console.log(props.location.search);
    console.log(parse(props.match.url.split("?")[1]));
    var data = { name: "Tom", age: 18, addres: "street 32" };
    // name=Tom&age=18&address=....
    console.log(stringify(data));
  }
  render() {
    return (
      <div>
        <h1>我是详情页</h1>
      </div>
    );
  }
}
