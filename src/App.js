import "./App.css";
import React, { Component } from "react";
// import NavBar from "./components/navbar";
// import Counters from "./components/counters";
import LifecycleA from "./components/LifecycleA";
import MemoComp from "./components/MemoComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 0 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 4 },
  //     { id: 4, value: 0 },
  //   ],
  // };

  // handleDelete = (counterId) => {
  //   const filterCounter = this.state.counters.filter(
  //     (counter) => counter.id !== counterId
  //   );
  //   this.setState({ counters: filterCounter });
  // };

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   const resetCounter = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters: resetCounter });
  // };
  // render() {
  //   return (
  //     <React.Fragment>
  //       <NavBar />
  //       <main className="container">
  //         <Counters
  //           counters={this.state.counters}
  //           onReset={this.handleReset}
  //           onIncrement={this.handleIncrement}
  //           onDelete={this.handleDelete}
  //         />
  //       </main>
  //     </React.Fragment>
  //   );
  // }

  render() {
    return (
      <div className="App">
        {/* <LifecycleA /> */}
        {/* <ParentComp/> */}
        {/* <RefsDemo/> */}
        {/* <FocusInput/> */}
        {/* <FRParentInput/> */}
        {/* <PortalDemo /> */}

        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}

export default App;
