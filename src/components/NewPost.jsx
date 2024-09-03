import classes from './NewPost.module.css';
import {useState} from "react";

function NewPost({buttonClose}) {
    const [initialText, setInitialText] = useState("");
    const [initialName, setInitialName] = useState("");
    function changeHandlerText(event){
        setInitialText(event.target.value);
    }
    function changeHandlerName(event){
        setInitialName(event.target.value);
    }
    function submissionHandler(event){
        event.preventDefault();
        const postData = {
            authorName: {initialName},
            textContent: {initialText}
        };
        console.log(postData)
        buttonClose();
    }

  return (
    <form className={classes.form} onSubmit={submissionHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeHandlerText}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeHandlerName}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={buttonClose}>Cancel</button>
        <button>Submit</button>

      </p>
    </form>
  );
}

export default NewPost;