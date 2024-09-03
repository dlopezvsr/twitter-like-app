import classes from "./Modal.module.css"
function Modal({children, visibility}){
    return(
        <>
            <div className={classes.backdrop} onClick={visibility}/>
            <dialog open className={classes.modal}>{children}</dialog>
    </>
    )
}

export default Modal;