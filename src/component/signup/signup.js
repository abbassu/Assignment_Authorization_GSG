import React,{useEffect, useState} from "react";
import { Link,Navigate ,useNavigate} from "react-router-dom";
import "./signup.css"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase";
import { async } from "@firebase/util";
import { Fetchdata } from "../utils/fetchapi";
function Signup (){
 
const auth = getAuth();
const navigate= useNavigate()
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [test,settest]=useState("")


    function signup_in(){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        alert("Successfully Created an Account")

        navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
        //   const errorMessage = error.message;
          alert(errorCode)
          // ..
        });
    }

    function on_change_email(value){
        // console.log(value)
        setemail(value)
    }
    function on_change_password(value){
        // console.log(value)
        setpassword(value)

    }

    async function end(){




        const url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZgUrDUUGRal0L-6mlZpXvB4vIMZQ7oNk"
       
        let res= await Fetchdata(url,email,password)

        console.log("resssssssss",res)

    }

    useEffect(()=>{
        end()
    },[])

    function clili(){
        console.log(test)
    }
    return(
        <div className="parentpage">
        <div className="page">
            <div className="mb-5">
                <strong className="strongtext">
                    Sign Up
                </strong>
            </div>
            <form action="">
                    <div className="input_text">
                        <label htmlFor=""> Username </label>
                    </div>
                    <div className="text">
                        <input type="email" placeholder="Please enter your email" onChange={(e=>{on_change_email(e.target.value)})} />
                    </div>
                    <div className="input_text">
                        <label htmlFor=""> Password </label>
                    </div>
                    <div className="text" >
                        <input type="password" placeholder="Please enter password" onChange={(e=>{on_change_password(e.target.value)})}/>
                    </div>
            </form>                                                    
            <div>                                                          
                <div className="parent_of_button">
                    <button type="button" className="button_in_form" onClick={signup_in}>Create Account</button>
                    

                </div>
                <div>
                    
                    <Link to={"/"} className="link">Login with existing account</Link>
                </div>
            </div>
        </div>
        </div>
        
    )
} 
export default Signup