// Page for SignUp Page For User.
import React from 'react';
import './SignUp.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function SignUpH () {
    return (
        <>
        <Nav />
    <div className='Cont'>
    <div className='Signup'>
        <div id='forms'>
                <h1 className='form-heading'>Sign Up</h1> <br />
            <div className='d-flex button-container'>
                <div > <Link to='/SignUpC'> <button id ='Customer'>Customer</button> </Link> </div>
                <div > <Link to='/SignUpH'> <button id ='Hotel'>Hotel</button> </Link>  </div> 
            </div>
                <form className='vip-form' >
                <div className="vip-form-inner">
                    <div className="d-flex name-email-wrapper">
                    <input type="text" placeholder='Enter your name' name='name' />
                    <input type="email" placeholder="Enter your email" name='email' />
                </div>

                <div className="d-flex name-email-wrapper">
                    <input type="text" placeholder="Enter phone number" name='phoneNumber'/>
                    <input type="text" placeholder="Enter your pincode" name='pincode' />   
                </div>
                
                <div className="d-flex name-email-wrapper">
                    <input type = 'text' placeholder="Enter hotel ID" name='phoneNumber' />
                    <input type = 'text' placeholder="Enter fssai license number" name='phoneNumber'/>   
                </div>
                    
                <div className="d-flex name-email-wrapper">
                    <input type = 'text' placeholder="Create Your Password" name='password' />
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