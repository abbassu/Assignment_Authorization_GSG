import React, { useState } from "react";
import "./reset.css"
import app from "../firebase/firebase";
import { getAuth, updatePassword  } from "firebase/auth";
import { GlobalContext } from "../util/utils";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Resetpass(){

    const navigate=useNavigate()
    const autho=useContext(GlobalContext)
    const auth = getAuth();
    const user = auth.currentUser;
    const [newpass,setnewpass]=useState()

    function on_change_pass(value){
        setnewpass(value)
    }


function change_pass(e){
    e.preventDefault()
    updatePassword(user, newpass).then(() => {
        alert("Password changed, We will be logging out of all devices")
        autho.signout()
        navigate('/')

      }).catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
      });
}

    return(
        <div className="resetpage">
            <div className="bigtext"> Your User Profile </div>
            <div>

                <form action="">
                    <div className="labelbox"><label htmlFor="">New Password</label></div>
                    
                    <input type="text" onChange={(e)=>{
                        on_change_pass(e.target.value)
                    }} />
                    <div className="button_in">
                        <button className="change" onClick={change_pass}> Change Password </button>
                    </div>
                </form>
            </div>
        
        </div>

    )
}
export default Resetpass