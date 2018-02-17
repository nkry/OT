import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Contact from "./Contact";

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

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);
export default ContactContainer;
