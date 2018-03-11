import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import 'normalize-scss';
import './styles/main.scss';
import { Provider } from 'react-redux';
import Store from './store';

// import components
import App from './components/App';
import LandingContainer from "./components/Landing/LandingContainer";
import CollectionContainer from "./components/Collection/CollectionContainer";
import StockistsContainer from "./components/Stockists/StockistsContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import ContentContainer from "./components/Content/ContentContainer";

// import actions
import * as actions from "./actions/actions";

// init store 
const StoreInstance = Store();
StoreInstance.dispatch(actions.checkDeviceWidth(window.innerWidth));
StoreInstance.dispatch(actions.getData());

// event listeners
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    let ww = window.innerWidth
    StoreInstance.dispatch(actions.checkDeviceWidth(ww));
  }, 250);
});

// set up routes
const Routes = () => {
  return (
    <BrowserRouter>
        <Switch location={location} history={history}>
          <App location={location}>
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/collection" component={CollectionContainer} />
            <Route exact path="/stockists" component={StockistsContainer} />
            <Route exact path="/contact" component={ContactContainer} />
            <Route exact path="/content" component={ContentContainer} />
          </App>
        </Switch>
    </BrowserRouter>
  );
};

// render 
ReactDOM.render(
  <Provider store={StoreInstance}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);