import {CREATE_POST, FETCH_POST, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER} from "./types";

export function createPost(post) {
    return{
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     try{
    //         dispatch(showLoader());
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    //         const json = await response.json();
    //         dispatch({type: FETCH_POST, payload: json});
    //         dispatch(hideLoader());
    //     } catch (e) {
    //         dispatch(showAlert("Что то пошло не так...", "danger"));
    //         dispatch(hideLoader());
    //     }
    // }
}

export function showAlert(text, alertType) {
    return {
        type: SHOW_ALERT,
        text: text,
        alertType: alertType
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT,
    }
}
