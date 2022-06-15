import React, { Component } from "react";
import MemoComp from "./MemoComp";
// import PureComp from "./PureComp";
// import RegularComp from "./RegularComp";
class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ravi",
    };
  }
  componentDidMount() {
    console.log("Parent mount");
    setInterval(() => {
      console.log("Parent mount 1");
      this.setState({});
    }, 2000);
  }

  componentDidUpdate() {
    //console.log("Parent Comp update");
  }

  render() {
    console.log("******************* Parent Comp Rendered *******************");
    return (
      <div>
        Parent Component
        {/* <RegularComp />
        <PureComp /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
