import React from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import { GlobalContext } from "../util/utils";
function Navbar(){
    
    const autho = useContext(GlobalContext)
    console.log("fffffffffffffffffff: ",autho.user)
    const navigate=useNavigate()
    function logout(){
        console.log("ffffffff")
        autho.signout()
        navigate('/')
    }
    function profile(){
        navigate('reset')

    }

    return(
        <div className="navbar">
            <div className="navbar_component ">
                <div className="logo">
                    {autho? <Link className="reactauth" to={"/board"}> React Auth </Link> :<Link className="reactauth" to={"/"}> React Auth </Link> }
                    
                </div>
                <div>
                <div> {autho.user ? 
<>

<div className="two_button">
                    <button type="button" className="btn btn-primary" onClick={profile}>Profile</button>
                    <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
                </div>
{/* console.log("autho user",autho.user) */}
</>

                
                
                :  <button type="button" className="btn btn-primary">Login</button>
                
                } </div>

                </div>
            </div>
        </div>
    )           
}
export default Navbar