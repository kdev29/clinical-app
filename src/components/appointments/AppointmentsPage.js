import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import * as $ from 'jquery';
import Breadcrumb from '../Layout/Breadcrumb';

const departments = [                
    { name: 'Department', id: 0 },
    { name: 'Cardiology', id: 1 },
    { name: 'Ophthalmology', id: 2 },
    { name: 'Neurology', id: 3 },
    { name: 'Psychology', id: 4 },
    { name: 'Dermatology', id: 5 },
]

const AppointmentsPage = () => {

    const [appointment, setAppointment] = useState({ patientName: 'Luis', phone: '5555', email: 'test@outlook.com', gender: '', department: 0, date: '01/01/2020'});
    const [formSent, setFormSent] = useState(false);
    const el = React.createRef();


    useEffect(() => {
        
        //    const $el = $(el);
        //   $el.datepicker();
        // window.createDatePicker();
       
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(JSON.stringify(appointment));
        setFormSent(true);
    }

    const handleInputChange = (e) => {

        const {name, value} = e.target;

        setAppointment(previousState => {             
            return {
            ...appointment,
            [name]: value
        } });

    }

    return (
        <>
            <div class="inner-banner-agileits-w3layouts">
            </div>

            <Breadcrumb current={'Appointments'}></Breadcrumb>		
            
            <div class="appointment">
            <div class="container">
                <div class="form-agileits">
                <h3>Make an appointment</h3>
                <p>Providing Total Health Care Solution</p>
                <form action="#" onSubmit={handleSubmit} method="post">
                    <input value={appointment.patientName} onChange={handleInputChange}  class="name" type="text" name="patientName" placeholder="Patient Name" required=""/>
                    <input value={appointment.phone} onChange={handleInputChange}  type="text" name="phone" placeholder="Number" required=""/>
                    <input ref={el} value={appointment.email} onChange={handleInputChange}  class="name" type="email" name="email" placeholder="Email" required=""/>
                    <input value={appointment.date} onChange={handleInputChange} 
                    id="datepicker1" name="date" type="text"  placeholder="mm/dd/yyyy" required="" />
                    <select value={appointment.department} onChange={handleInputChange} name="department" class="form-control name" placeholder="department">
                        {
                            departments.map(d => (<option key={d.id} value={d.id}>{d.name}</option>))
                        }
                        
                    </select>
                    <select value={appointment.gender} onChange={handleInputChange} name="gender" class="form-control">
                        <option value="" selected>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <input type="submit" value="Make an appointment" />
                    {
                        formSent && (<div style={{margin: '10px 0'}} class='alert alert-success'>
                                        Your appointment has been made, see you soon
                                    </div>)
                    }
                </form>
                </div>
                <div class="timings-w3ls">
                                        <h5>Appointment Days</h5>
                                        <ul>
                                            <li>Pediatric <span>Sun-Tue</span></li>
                                            <li>Gynaecology<span>Wed-Fri</span></li>
                                            <li>Cardiac<span>Sat-Mon</span></li>
                                        </ul>
                </div>
                <div class="w3ls-location">
                    <a href="locations.html">Locations</a>
                </div>
                </div>
                
                <div class="clearfix"> </div>
            </div>
        </>
    );
}

export default AppointmentsPage;