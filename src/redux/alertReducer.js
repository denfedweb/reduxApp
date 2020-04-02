import {HIDE_ALERT, SHOW_ALERT} from "./types";

const initialState = {
    alertType: "primary",
    showed: false,
    text: ""
};

export function alertReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, showed: true, text: action.text, alertType: action.alertType};
        case HIDE_ALERT:
            return {...state, showed: false};
        default: return state
    }
}
