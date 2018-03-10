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
    dynamicTitle: state.dynamicTitle,
    collectionLength: state.collectionLength,
    collectionLoaded: state.collectionLoaded,
    collectionCached: state.collectionCached
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
        collectionLength={this.props.collectionLength}
        collectionLoaded={this.props.collectionLoaded}
        collectionCached={this.props.collectionCached}
        cacheCollection={this.props.action.cacheCollection}
        setCollectionLength={this.props.action.setCollectionLength}
        updateCollectionLoaded={this.props.action.updateCollectionLoaded}
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
