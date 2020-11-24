import {applyMiddleware, bindActionCreators, combineReducers, createStore} from "redux";
import {connect} from "react-redux";
import thunk from "redux-thunk";
import {compose} from "redux";

import {testReducer} from "./test";
import {hardwareReducer} from "./hardware";

import * as TestActions from "./test";
import * as HardwareActions from "./hardware";

let store = null;

export function setupStore() {
    store = createStore(combineReducers({
        test: testReducer, hardware: hardwareReducer
    }), compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));

    return store;
}

export function getStore() {
    return store;
}

export function getActions() {
    return {...TestActions, ...HardwareActions};
}

export function setupReduxConnection(getProps) {
    function mapStateToProps(state) {
        if (Array.isArray(getProps)) {
            return getProps.reduce((dict, item) => {
                dict[item] = state[item];
                return dict;
            }, {});
        }

        return getProps(state);
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators(getActions(), dispatch);
    }

    return connect(mapStateToProps, mapDispatchToProps);
}
