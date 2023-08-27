import React from "react";
import ReactDOM from "react-dom";
import { cartstore } from "../App";
import { Button } from "react-bootstrap";
import Addcart from "./Addcart";
function Modal({ show, closeModal }) {
  const[cart,setCart,showcart,setShowcart,login,setLogin]=React.useContext(cartstore);
  if (!showcart) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay" onClick={(event)=>{setShowcart(!showcart)}}></div>
      <div className="content">
        <Addcart/>
        <Button onClick={(event)=>{setShowcart(!showcart)}}>Close</Button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;