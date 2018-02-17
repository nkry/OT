import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Content from "./Content";

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

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);
export default ContentContainer;
