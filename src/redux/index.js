import {applyMiddleware, bindActionCreators, combineReducers, createStore} from "redux";
import {connect} from "react-redux";
import thunk from "redux-thunk";

import {testReducer} from "./test";

import * as TestActions from "./test";

let store = null;

export function setupStore() {
    store = createStore(combineReducers({
        test: testReducer
    }), applyMiddleware(thunk));

    return store;
}

export function getStore() {
    return store;
}

export function getActions() {
    return {...TestActions};
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
