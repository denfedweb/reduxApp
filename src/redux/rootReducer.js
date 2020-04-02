import {combineReducers} from "redux";
import {postsReducer} from "./postReducer";
import {appReducer} from "./appReducer";
import {alertReducer} from "./alertReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    alert: alertReducer
});
