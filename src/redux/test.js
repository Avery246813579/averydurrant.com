const defaultState = {
    test: null
};

const UPDATE_TEST = "UPDATE_TEST";

export function updateTest(payload) {
    return {type: UPDATE_TEST, payload};
}

export function updateTestThunk(payload) {
    return async (getState, dispatch) => {
        let {test} = getState().test;

        setTimeout(() => {
            if (test === "test") {
                dispatch(updateTest(payload));
            }
        }, 1000);
    }
}


export const testReducer = (state = defaultState, action) => {
    let {type, payload} = action;

    switch (type) {
        default:
            return state;
        case UPDATE_TEST:
            return {...state, test: payload};
    }
};
