import react from "react";
import "./Login.css"
import logo from './images/pngegg.png';
import applogo from './images/xcalqa01.svg'


const SignUp = () => {
    return (
    <div className="Fsignuppage">
        <img src={applogo} className="App-logo" alt="logo" />
        <div className="signuppage">
            <div className="signupform">
                <div className="welcome">
                    <img src={logo} className="login-logo" alt="logo" />
                    <h2>Create Account</h2>
                    <p>Enter Your Personal Details</p>
                </div>

                <div className="loginInputs">
                    <input type="text" placeholder="First Name" />

                    <input type="text" placeholder="Last Name"/>
                    <input type=""/>
                </div> 
                <button className="loginbutton">Sign In</button>
                <br/>
                <br/>
                <br/>
                <br/>
                <a href="" className="createAccount">Already have an account?<br/> Login</a>
                
            </div>
        </div>
    </div>    
    )
}

export default SignUp