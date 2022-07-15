import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './DashBoardH.css';
import Nav2 from './Nav2';
import Sidebar from './Components/SidebarH'



function DashBoardH() {
    const [credentials, setCredentials] = useState({ pincode: "", size: "", date: "", stime: "", etime: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
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

        if (json.success) {
            localStorage.setItem('access-token', json.jwtToken);
            // handle success - redirect to home page
            // Redirect Here
            <Redirect push to="/Hotels" />
        }
        else {
            //alert to show error to be handeled by frontend
        }

    }

    return (
        <>
            <Nav2 />
            <div id='DashH'>
                <Sidebar />
                <div className="main-dashH">
                <h2 className='title-bumttonH'>Central Perk</h2>
                    <div className="location-cardH">
                    <h3 className = 'seaterH'>2Seater </h3>
                        <div className='row-dashH'>
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Total Seats: 60</h3>
                                </div>
                            </div>
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Available Seats: 25</h3>
                                </div>
                            </div> 
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Booked Seats: 35</h3>
                                </div>
                            </div> 
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Booked Seats: 35</h3>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <br /> <br />
                    <div className="location-cardH">
                    <h3 className = 'seaterH'>4Seater </h3>
                        <div className='row-dashH'>
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Total Seats: 60</h3>
                                </div>
                            </div>
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Available Seats: 25</h3>
                                </div>
                            </div> 
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Booked Seats: 35</h3>
                                </div>
                            </div> 
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Booked Seats: 35</h3>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <br /> <br />
                    <div className="location-cardH">
                    <h3 className = 'seaterH'>6Seater </h3>
                        <div className='row-dashH'>
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Total Seats: 60</h3>
                                </div>
                            </div>
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Available Seats: 25</h3>
                                </div>
                            </div> 
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Booked Seats: 35</h3>
                                </div>
                            </div> 
                            <div class='colH'>
                                <div className='location-bumttonH'>
                                    <h3 className='title-bumttonH'>Booked Seats: 35</h3>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default DashBoardH;