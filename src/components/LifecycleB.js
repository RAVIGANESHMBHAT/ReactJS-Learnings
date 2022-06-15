import React, { Component } from "react";

class LifecycleB extends Component {
  //Mounting Phase
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj",
    };
    console.log("Lifecycle B constructor");
  }

  //Mounting Phase, Update Phase
  static getDerivedStateFromProps(props, state) {
    console.log("Life B getDerivedStateFromProps");
    return null;
  }

  //Mounting Phase
  componentDidMount() {
    console.log("Life B componentDidMount");
  }

  //Updating Phase
  shouldComponentUpdate() {
    console.log("Life B shouldComponentUpdate");
    return true;
  }

  //Updating Phase
  getSnapshotBeforeUpdate() {
    console.log("Life B getSnapshotBeforeUpdate");
    return null;
  }

  //Update Phase
  componentDidUpdate() {
    console.log("Life B componentDidUpdate");
  }

  render() {
    console.log("Life B render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
