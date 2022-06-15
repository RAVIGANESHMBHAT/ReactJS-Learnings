import React, { Component } from "react";

class RegularComp extends Component {
  componentDidUpdate() {
    console.log("Regular Comp update");
  }
  render() {
    return <div>RegularComp</div>;
  }
}

export default RegularComp;
