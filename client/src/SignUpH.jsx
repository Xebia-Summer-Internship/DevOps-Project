// Page for SignUp Page For User.
import React,{useState} from 'react';
import './SignUp.css';
import './SignUpH.css';
import Nav from './Nav';
import { useHistory , Link } from 'react-router-dom';
import $ from 'jquery';

function SignUpH (props) {

    const [credentials, setCredentials] = useState({name:"",email:"",phoneNumber:"",fassaiid:"",address:"",pincode:"",password:""});
    let history = useHistory();

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    //Validating input fields
    function phonePinNumberValid(phonePinNumber){
        var regex = /^[0-9]*$/;
        var isValid = regex.test(phonePinNumber);
        var result = true;
        result = (!isValid) ? false : true;
        return result;
    }
    function nameValid(name){
        var regex = /^[A-Za-z ]*$/;
        var isValid = regex.test(name);
        var result = true;
        result = (!isValid) ? false : true
        return result;
    }

    var conPassword = "";
    //Validations Function
    function validations(object){
        var clientValidations = true;
        if(nameValid(object.name) == false){
            $('#validationDivision').append($("<div\"></div>").html("<h4><b></b></h4><span style=\"color:red\">Invalid Name</span>"));
            clientValidations = false;
        }
        if(phonePinNumberValid(object.phone) == false || object.phone.length != 10){
            $('#validationDivision').append($("<div\"></div>").html("<h4><b></b></h4><span style=\"color:red\">Invalid phone number</span>"));
            clientValidations = false;
        }
        if(phonePinNumberValid(object.pincode) == false || object.pincode.length != 6){
            $('#validationDivision').append($("<div\"></div>").html("<h4><b></b></h4><span style=\"color:red\">Invalid pincode</span>"));
            clientValidations = false;
        }
        if(object.password != conPassword){
            $('#validationDivision').append($("<div\"></div>").html("<h4><b></b></h4><span style=\"color:red\">Passwords does not match</span>"));
            clientValidations = false;
        }
        return true;
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(credentials);

        var dataObj = {
            email: credentials.email,
            password: credentials.password,
            name: credentials.name,
            fassaiid: credentials.fassaiid,
            address:credentials.address,
            pincode:credentials.pincode,
            phoneNumber: credentials.phoneNumber
        }       

        // console.log(JSON.stringify(awesomeObj));
        if(validations(dataObj)){
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
            console.log("SIGNUP SUCCESSFUL");             
            localStorage.setItem('access-token',json.jwtToken);
            // handle success - redirect to home page
            // Redirect Here
            history.push("/LoginH");
        }
        else{
            //alert to show error to be handeled by frontend
        }
    
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
            <div id = "validationDivision"></div>
                <form className='vip-form' action="" onSubmit={handleOnSubmit}>
                <div className="vip-form-inner">
                    <div className="d-flex name-email-wrapper">
                    <input type="text" placeholder='Enter your name' name='name' onChange={onChange} required/>
                    <input type="email" placeholder="Enter your email" name='email' onChange={onChange} required/>
                </div>

                <div className="d-flex name-email-wrapper">
                    <input type="text" placeholder="Enter phone number" name='phoneNumber' onChange={onChange} required/>
                    <input type="text" placeholder="Enter your pincode" name='pincode' onChange={onChange} required/>   
                </div>
                
                <div className="d-flex name-email-wrapper">
                    <input type = 'text' placeholder="Enter hotel Address" name='address' onChange={onChange} required/>
                    <input type = 'text' placeholder="Enter fssai license number" name='fassaiid'onChange={onChange} required/>   
                </div>
                    
                <div className="d-flex name-email-wrapper">
                    <input type = 'password' placeholder="Create Your Password" name='password' onChange={onChange} required/>
                    <input type = 'password' placeholder="Confirm Password" name='conPassword' id="conPassword" required/>   
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

