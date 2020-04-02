import React from 'react'
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, showAlert} from "../redux/actions";

export default function FetchedPosts() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.fetchedPosts);
    const loading = useSelector(state => state.app.loading);

    if(loading){
        return <p>LOADING</p>;
    }

    function dispatching(func) {
        return dispatch(func);
    }

    function showPosts() {
        dispatching(fetchPosts());
        dispatching(showAlert("Posts downloaded", "primary"));
    }

    if(!posts.length){
        return (<button
            className='btn btn-primary'
            onClick={showPosts}
        >Download</button>)
    }
    return posts.map((post)=> <Post post={post} key={post.id} />)
}
