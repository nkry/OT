import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Menu from "./Menu";

const mapStateToProps = function(state, prop) {
  return {
    data: state.data,
    mobile: state.mobile,
    sidebarOpen: state.sidebarOpen,
    currentPage: state.currentPage,
    numberOfCollections: state.numberOfCollections
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    action: bindActionCreators(actions, dispatch)
  };
};

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);
export default MenuContainer;
