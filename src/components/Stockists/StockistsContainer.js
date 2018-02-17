import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";
import Stockists from "./Stockists";

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

const StockistsContainer = connect(mapStateToProps, mapDispatchToProps)(Stockists);
export default StockistsContainer;
