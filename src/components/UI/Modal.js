import reactDom from "react-dom";
import React from "react";
import classes from './Modal.module.css' 

const Backdrop=()=>{
    return <div className={classes.backdrop}></div>
}

const Overlay=(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement=document.getElementById('overlay')

const Modal=(props)=>{
    return (
        <React.Fragment>
            {reactDom.createPortal(<Backdrop />,portalElement)}
            {reactDom.createPortal(<Overlay>{props.children}</Overlay>,portalElement)}
        </React.Fragment>
    )
}
export default Modal;