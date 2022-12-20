import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./../signup/signup.css"
import { GlobalContext } from "../util/utils";
import app from "../firebase/firebase";
import { useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    const navigate=useNavigate()
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const autho=useContext(GlobalContext)

    function on_change_email(value){
        setemail(value)
    }
    function on_change_password(value){
        setpassword(value)
    }
    const auth = getAuth();
    function login_in(){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    autho.sign_in(email)
    alert("Successfully Sign in")
        navigate("/board")
    })
    .catch((error) => {
    const errorCode = error.code;
        alert( errorCode)
    });
    }

    return(
        <div className="parentpage">
        <div className="page">
            <div className="mb-5">
                <strong className="strongtext">
                    Login
                </strong>
            </div>
            <form action="">
                    <div className="input_text">
                        <label htmlFor=""> Username </label>
                    </div>
                    <div className="text">
                        <input type="email" placeholder="Please enter your email" onChange={(e)=>{ on_change_email(e.target.value) }}/>
                    </div>
                    <div className="input_text">
                        <label htmlFor=""> Password </label>
                    </div>
                    <div className="text" >
                        <input type="password" placeholder="Please enter password" onChange={(e)=>{ on_change_password(e.target.value) }}/>
                    </div>
            </form>
            <div>
                <div className="parent_of_button">
                    <button type="button" className="button_in_form" onClick={login_in}>Login</button>
                </div>
                <div>
                    <Link to={"/signup"} className="link">Create new account</Link>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Login