import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Collection from "./Collection";

const mapStateToProps = function(state, prop) {
  return {
    data: state.data,
    mobile: state.mobile,
    numberOfCollections: state.numberOfCollections,
    showCollectionTitle: state.showCollectionTitle,
    dynamicTitle: state.dynamicTitle
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    action: bindActionCreators(actions, dispatch)
  };
};

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Collection
        cacheCollection={this.props.action.cacheCollection}
        setCurrentPage={this.props.action.setCurrentPage}
        data={this.props.data}
        mobile={this.props.mobile}
        numberOfCollections={this.props.numberOfCollections}
        showCollectionTitle={this.props.showCollectionTitle}
        dynamicTitle={this.props.dynamicTitle}
        showCollectionTitle={this.props.action.showCollectionTitle}
        hideCollectionTitle={this.props.action.hideCollectionTitle}
        setDynamicTitle={this.props.action.setDynamicTitle}
        setFeaturedImage={this.props.action.setFeaturedImage}
        openSidebar={this.props.action.openSidebar}
      />
    );
  }
}

const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
export default CollectionContainer;
