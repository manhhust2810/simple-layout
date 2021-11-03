import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "./views/Display";
import "./App.css";
class App extends Component {

  render() {
    return (<Display />);
  };
};

const mapStateToProps = (state) => {
  return {
    visibleTheme: state.visibleTheme
  }
}

export default connect(mapStateToProps, null)(App);