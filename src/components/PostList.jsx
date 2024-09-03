import {useState} from "react";
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx"
import classes from "./PostList.module.css";
function PostList({visibility, changeVisibility}){
    return (
        <>
        { visibility ? (<Modal visibility={changeVisibility}>
                <NewPost
                    buttonClose={changeVisibility}
                />
            </Modal>): null}

            <ul className={classes.posts}>
                <Post author="José" body="Hello, I want to share!"/>
            </ul>
            </>
    );
}

export default PostList;