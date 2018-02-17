import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Landing from "./Landing";

const mapStateToProps = function(state, prop) {
  return {
    data: state.data,
    mobile: state.mobile,
    landingLayout: state.landingLayout
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    action: bindActionCreators(actions, dispatch)
  };
};

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Landing);
export default LandingContainer;
