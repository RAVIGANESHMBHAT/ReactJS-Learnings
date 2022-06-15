import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
class ParentComp extends Component {
  componentDidMount() {
    console.log("Parent mount");
    setInterval(() => {
      console.log("Parent mount 1");
      this.setState({});
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Parent Comp update");
  }

  render() {
    return (
      <div>
        Parent Component
        <RegularComp />
        <PureComp />
      </div>
    );
  }
}

export default ParentComp;
