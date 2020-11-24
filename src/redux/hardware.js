const defaultState = {
    darkMode: false
};

const UPDATE_THEME = "UPDATE_THEME";

export function updateTheme(payload) {
    return {type: UPDATE_THEME, payload};
}

export const hardwareReducer = (state = defaultState, action) => {
    let {type, payload} = action;

    switch (type) {
        default:
            return state;
        case UPDATE_THEME:
            return {...state, darkMode: payload};
    }
};
