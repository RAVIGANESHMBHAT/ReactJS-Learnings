import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  componentDidUpdate() {
    console.log("Pure Comp update");
  }

  render() {
    return <div>PureComp</div>;
  }
}

export default PureComp;
