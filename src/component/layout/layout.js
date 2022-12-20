import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import { GlobalContext } from "../util/utils";
import { getAuth, updatePassword } from "firebase/auth";
import app from "../firebase/firebase";

function Layout(){

    const [email,setemail]=useState(localStorage.getItem('user'))
    const [password,setpassword]=useState("")

    const auth = getAuth(app);

    const autho ={
        user:email,

        sign_in: (enter_email)=>{
            console.log(" done in layout ")
            setemail(enter_email)
            localStorage.setItem('user',enter_email)
        },

        signout:()=>{
            setemail("")
            localStorage.clear()
        },

        change_pass:(newpass)=>{
            console.log("newpassword : ",newpass)

            const user = auth.currentUser;
            updatePassword(user, newpass).then(() => {
            // Update successful.
            alert("will done")
            }).catch((error) => {
            // An error ocur
            alert("fail")    
            // ...
            });

        }
    }

    return(
        <GlobalContext.Provider value={autho}>
            <div>
                <Navbar/>
                <Outlet/>
            </div>
        </GlobalContext.Provider>

    )
}

export default Layout