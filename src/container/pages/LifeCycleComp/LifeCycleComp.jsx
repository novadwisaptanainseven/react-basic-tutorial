import React, { component, Component, Fragment } from "react";
import "./LifeCycleComp.css";
import { connect } from "react-redux";
import { RootContext } from "../../Home/Home";
import { GlobalConsumer } from "../../../context/context";

class LifeCycleComp extends Component {
  // Constructor
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 1,
    };
  }

  // getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  // componentDidMount
  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 3000);
  }

  // shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // console.log(`nextProps:`, { nextProps });
    console.log(`nextState:`, nextState);
    console.log(`thisState:`, this.state);
    console.groupEnd();

    if (nextState.count > 3) {
      return false;
    }

    return true;
  }

  // getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");

    return null;
  }

  // componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  // componentWillUmmount
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // changeCount
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // Render
  render() {
    console.log("render");
    return (
      <Fragment>
        <h1>Life Cycle Component</h1>
        <hr />
        <button className="btn" onClick={this.changeCount}>
          Component Button {this.state.count}
        </button>

        <p>Total Order: {this.props.state.totalOrder}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

// export default connect(mapStateToProps)(LifeCycleComp);
export default GlobalConsumer(LifeCycleComp);
