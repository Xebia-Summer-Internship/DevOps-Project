import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './DashBoard.css';
import Nav1 from './Nav1';
import Sidebar from './Components/Sidebar'

function DashBoard () {

    const [credentials, setCredentials] = useState({pincode:"",size:"",date:"",stime:"",etime:""});
    let history = useHistory();
    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        console.log(credentials);
        
        var dataObj = {       
            pincode: credentials.pincode,
            size: credentials.size,
            date: credentials.date,
            stime: credentials.stime,
            etime: credentials.etime,
        }       

        // console.log(JSON.stringify(awesomeObj));
       
        var response = await fetch('/api/searchHotels', {
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
        console.log("data obj: " + dataObj.pincode);
        if(credentials.pincode!=0 && credentials.size!=0 && credentials.date!=0 && credentials.stime != 0 && credentials.etime != 0){            
            localStorage.setItem('access-token',json.jwtToken);
            // handle success - redirect to home page
            // Redirect Here
            console.log("SUCESS");
            history.push("/ShowHotels");
        }
        else{
            console.log("FAILED");
            //alert to show error to be handeled by frontend
            alert("Enter Full Details");
        }

    }

    return (
        <>
        <Nav1 />
        <div id='Dash'>
        <Sidebar />
            <div className="main-dash">
                <div className="location-card">
                    <div className='row-dash'>
                        <div class='col'>
                            <div className='location-bumtton'>
                                <h3 className='title-bumtton'>Enter Pincode</h3>
                                <input type="number" name="pincode" id=""  onChange={onChange} required />
                            </div>
                        </div>
                        <div class='col'>
                        <div className='location-bumtton'>
                            <h3 className='title-bumtton'>Enter Party Size</h3>
                            <input type="number" name="size" id=""  onChange={onChange} required/>
                        </div>
                    </div>
                        
                    </div>
                </div>
                <br /> <br />
            <div className="location-card">
                <div class='row-dash'>
                    <div class='col'>
                        <div className='bumtton'>
                            <h3 className='title-bumtton'>Enter Date</h3>
                            <input type="date" name="date" id=""  onChange={onChange} required/>
                        </div>
                    </div>
                   
                    <div class='col'>
                        <div className='bumtton'>
                            <h3 className='title-bumtton'>Start Time</h3>
                            <input type="time" name="stime"  onChange={onChange} required/>
                        </div>
                    </div>
                    
                    <div class='col'>
                        <div className='bumtton'>
                            <h3 className='title-bumtton'>End time</h3>
                            <input type="time" name="etime" id=""  onChange={onChange} required/>
                        </div>
                    </div>
               
                </div>
            </div>
                <br />
              
                <button type='submit' data-aos="fade-zoom-in" id="sbutton" onClick={handleOnSubmit}>Search</button>
                
            </div>
        
        </div>
        

        </>
    );
}

export default DashBoard;