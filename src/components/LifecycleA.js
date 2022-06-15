import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  //Mounting Phase
  constructor(props) {
    super(props);

    this.state = {
      name: "Ravi",
    };
    console.log("Lifecycle A constructor");
  }

  //Mounting Phase , Updating Phase
  static getDerivedStateFromProps(props, state) {
    console.log("Life A getDerivedStateFromProps");
    return null;
  }

  //Mounting Phase
  componentDidMount() {
    console.log("Life A componentDidMount");
  }

  //Updating Phase
  shouldComponentUpdate() {
    console.log("Life A shouldComponentUpdate");
    return true;
  }

  //Updating Phase
  getSnapshotBeforeUpdate() {
    console.log("Life A getSnapshotBeforeUpdate");
    return null;
  }

  //Update Phase
  componentDidUpdate() {
    console.log("Life A componentDidUpdate");
  }

  changeState = () => {
    this.setState({});
  };

  render() {
    console.log("Life A render");
    return (
      <>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;
