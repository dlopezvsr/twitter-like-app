import classes from "./Post.module.css";
function Post(props) {
    return(
        <ul className={classes.post}>
            <p> {props.author} </p>
            <p>{props.body}</p>
        </ul>
    );
}

export default Post;
