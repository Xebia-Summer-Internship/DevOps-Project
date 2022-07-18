import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ShowHotels.css';
import Nav1 from './Nav1';
import Sidebar from './Components/Sidebar'

function ShowHotels () {

    // const [credentials, setCredentials] = useState({pincode:"",size:"",date:"",stime:"",etime:""});

    // const onChange = (e)=>{
    //     setCredentials({...credentials,[e.target.name]:e.target.value})
    // }

    // const handleOnSubmit = async (e) => {
    //     e.preventDefault()
    //     console.log(credentials);
        
    //     var dataObj = {       
    //         pincode: credentials.pincode,
    //         size: credentials.size,
    //         date: credentials.date,
    //         stime: credentials.stime,
    //         etime: credentials.etime,
    //     }       

    //     // console.log(JSON.stringify(awesomeObj));
       
    //     var response = await fetch('/api/searchHotels', {
    //         method: 'POST',
    //         mode: 'no-cors',
    //         cache: 'no-cache',
    //         accessControlAllowOrigin: 'http://localhost:5000,*',
    //         accept: 'application/json',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(dataObj)
    //     });
    //     var json = await response.json().catch(err => console.log(err));
        
    //     console.log("response received: " + JSON.stringify(json));

    //     if(json.success){            
    //         localStorage.setItem('access-token',json.jwtToken);
    //         // handle success - redirect to home page
    //         // Redirect Here
    //         <Redirect push to="/Hotels"/>
    //     }
    //     else{
    //         //alert to show error to be handeled by frontend
    //     }
    // }

    return (
        <>
        <Nav1 />
        <div id='DashQ'>
            <Sidebar />
            <div className="main-dashQ">
                <div className="location-cardQ">
                    <div className='row-dashQ'>
                        <h3>HotelName</h3>
                        <h3>Address</h3>
                        <h3>Pincode</h3>
                        <h3>Mobile</h3>
                        <button type='submit' data-aos="fade-zoom-in" id="bbutton" onClick>Book</button>
                    </div>
                </div>
                <br /> 
                <div className="location-cardQ">
                    <div className='row-dashQ'>
                        <h3>HotelName</h3>
                        <h3>Address</h3>
                        <h3>Pincode</h3>
                        <h3>Mobile</h3>
                        <button type='submit' data-aos="fade-zoom-in" id="bbutton" onClick>Book</button>
                    </div>
                </div>
                <br /> 
                <div className="location-cardQ">
                    <div className='row-dashQ'>
                        <h3>HotelName</h3>
                        <h3>Address</h3>
                        <h3>Pincode</h3>
                        <h3>Mobile</h3>
                        <button type='submit' data-aos="fade-zoom-in" id="bbutton" onClick>Book</button>
                    </div>
                </div>
                <br /> 
                <div className="location-cardQ">
                    <div className='row-dashQ'>
                        <h3>HotelName</h3>
                        <h3>Address</h3>
                        <h3>Pincode</h3>
                        <h3>Mobile</h3>
                        <button type='submit' data-aos="fade-zoom-in" id="bbutton" onClick>Book</button>
                    </div>
                </div>                       
            </div>
        </div>
        </>
    );
}

export default ShowHotels;