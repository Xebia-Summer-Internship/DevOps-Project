import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './DashBoardH.css';
import Nav2 from './Nav2';
import Sidebar from './Components/SidebarH'



function DashBoardH () {
    const [credentials, setCredentials] = useState({pincode:"",size:"",date:"",stime:"",etime:""});

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

        if(json.success){            
            localStorage.setItem('access-token',json.jwtToken);
            // handle success - redirect to home page
            // Redirect Here
            <Redirect push to="/Hotels"/>
        }
        else{
            //alert to show error to be handeled by frontend
        }

    }

    return (
        <>
        <Nav2 />
        <div id='Dash'>
        <Sidebar />
        </div>
        </>
    );

}

export default DashBoardH;