import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Fullscreen from "./Fullscreen";
import Content from './Content'

const mapStateToProps = function(state, prop) {
  return {
    data: state.data,
    mobile: state.mobile
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    action: bindActionCreators(actions, dispatch)
  };
};

class Container extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.data.length === 0) {
      // loader
      return <div></div>
    }
    else {
      let data = this.props.data.data.children[1]; 
      // console.log("data in container", data)
      if (data.posts.length <= 1) {
        return (
          <Fullscreen setCurrentPage={this.props.action.setCurrentPage} data={data} mobile={this.props.mobile} />
        )
      }
      else {
        return (
          <Content setCurrentPage={this.props.action.setCurrentPage} data={data} mobile={this.props.mobile} />
        )
      }
    }
  }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
export default ContentContainer;
