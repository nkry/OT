import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Collection from "./Collection";

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

const CollectionContainer = connect(mapStateToProps, mapDispatchToProps)(Collection);
export default CollectionContainer;
