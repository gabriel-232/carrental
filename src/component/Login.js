import react from "react";
import "./Login.css"
import logo from './images/pngegg.png';
import applogo from './images/xcalqa01.svg'


const Login = () => {
    return (
    <div className="Floginpage">
        <img src={applogo} className="App-logo" alt="logo" />
        <div className="loginpage">
            <div className="loginform">
                <div className="welcome">
                    <img src={logo} className="login-logo" alt="logo" />
                    <h2>Welcome</h2>
                    <p>Sign in to your account</p>
                </div>

                <div className="loginInputs">
                    <input type="text" placeholder="Enter your username or email" />
                    <br/>
                    <br/>
                    <input type="password" placeholder="Enter your password"/>
                </div> 
                <button className="loginbutton">Sign In</button>
                <br/>
                <br/>
                <a href="" className="forgotPassword">Forgot Password</a>
                <br/>
                <br/>
                <br/>
                <a href="./SignUp.js" className="createAccount">Don't have an account yet<br/> Create Account</a>
                
            </div>
        </div>
    </div>    
    )
}

export default Login