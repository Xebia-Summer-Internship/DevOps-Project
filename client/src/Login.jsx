// Page for Login Page.
import React,{useState} from 'react';
import Nav from './Nav';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';

function Login () {
    const [credentials, setCredentials] = useState({email:"",password:""});

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(credentials);
        
        var dataObj = {
            email: credentials.email,
            password: credentials.password,
        }       

        // console.log(JSON.stringify(awesomeObj));
       
        var response = await fetch('/api/customerSignIn', {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            accessControlAllowOrigin: 'http://localhost:5000,*',
            accept: 'application/json',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataObj)
        });
        var json = await response.json().catch(err => console.log(err));
        
        console.log("response received: " + JSON.stringify(json));

        if(json.success){            
            localStorage.setItem('access-token',json.jwtToken);
            // handle success - redirect to home page
            // Redirect Here
            <Redirect push to="/DashBoard"/>
        }
        else{
            //alert to show error to be handeled by frontend
        }

    }
    return (
        <>
            <Nav />
            <div className='Main'>
                <div className="login">
                    <h1 className='form-heading'>Login</h1> 
                    <div className='button-container'>
                        <Link to='/'> <button id ='Customer2'>Customer</button> </Link>
                        <Link to='/LoginH'> <button id ='Hotel2'>Hotel</button> </Link> 
                    </div> 
                    <br /><br />
                    <input type = 'email' placeholder="Enter your email" name='email'  id="email1" onChange={onChange} required/><br /><br/>
                    <input type = 'password' placeholder="Enter your Password" name='password'  id="password1" onChange={onChange} required/> <br /> <br />
                    {/*<Link to ="" id="forgot"><b>Forgot Password?</b></Link> <br />*/}
                    <button type='submit' data-aos="fade-zoom-in" id="button" onClick={handleOnSubmit}>Login</button>
                    {/* <button type='submit' data-aos="fade-zoom-in" id="button">Login</button> */}
                    <br></br><br></br>
                    <p id="accountExists1"><b>Don't have an account?</b><Link to ="/SignUpC" id='signInBtn1'><b> Sign Up</b></Link></p>
                </div>
            </div>
        </>
    );
}

export default Login;