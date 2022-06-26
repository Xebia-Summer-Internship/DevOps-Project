// Page for SignUp Page For User.
import React,{useState} from 'react';
import './SignUp.css';
import './SignUpH.css';

import {Redirect} from 'react-router-dom'
import Nav from './Nav';
import { Link } from 'react-router-dom';

function SignUpH (props) {

    const [credentials, setCredentials] = useState({name:"",email:"",phoneNumber:"",FassaiID:"",address:"",pincode:"",password:""});

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(credentials);

        var dataObj = {
            email: credentials.email,
            password: credentials.password,
            name: credentials.name,
            FassaiID: credentials.FassaiID,
            address:credentials.address,
            pincode:credentials.pincode,
            phoneNumber: credentials.phoneNumber
        }       

        // console.log(JSON.stringify(awesomeObj));

        var response = await fetch('/api/hotelOwnerSignUp', {
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
            <Redirect to="/"/>
        }
        else{
            //alert to show error to be handeled by frontend
        }

    }
    return (
        <>
        <Nav />
    <div className='Cont'>
    <div className='Signup'>
        <div id='forms'>
                <h1 className='form-heading'>Sign Up</h1> <br />
            <div className='d-flex button-container'>
                <div > <Link to='/SignUpC'> <button id ='Customer1'>Customer</button> </Link> </div>
                <div > <Link to='/SignUpH'> <button id ='Hotel1'>Hotel</button> </Link>  </div> 
            </div>
                <form className='vip-form' action="" onSubmit={handleOnSubmit}>
                <div className="vip-form-inner">
                    <div className="d-flex name-email-wrapper">
                    <input type="text" placeholder='Enter your name' name='name' onChange={onChange}/>
                    <input type="email" placeholder="Enter your email" name='email' onChange={onChange}/>
                </div>

                <div className="d-flex name-email-wrapper">
                    <input type="text" placeholder="Enter phone number" name='phoneNumber' onChange={onChange}/>
                    <input type="text" placeholder="Enter your pincode" name='pincode' onChange={onChange}/>   
                </div>
                
                <div className="d-flex name-email-wrapper">
                    <input type = 'text' placeholder="Enter hotel Address" name='address' onChange={onChange}/>
                    <input type = 'text' placeholder="Enter fssai license number" name='FassaiID'onChange={onChange}/>   
                </div>
                    
                <div className="d-flex name-email-wrapper">
                    <input type = 'text' placeholder="Create Your Password" name='password' onChange={onChange}/>
                    <input type = 'text' placeholder="Confirm Password" name='conPassword'/>   
                </div>
                <div className='mt-1'>
                       <button className="submit" type="submit">Submit</button>
                </div> <br />
                    <p id="accountExists"><b>Already have an account?</b><Link to ="/"id='signInBtn'> <b>Sign in</b></Link></p>
                    </div>
                </form>
        </div>
    </div>
    </div>
        </>
    );
}

export default SignUpH;

