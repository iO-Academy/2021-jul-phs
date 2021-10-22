import React, {useState, useEffect} from "react";
import {useLocation, Link} from "react-router-dom";

const AppointmentBooked = () => {
    const search = useLocation().search;
    const name = new URLSearchParams(search).get('name')
    const description = new URLSearchParams(search).get('description')
    const day = new URLSearchParams(search).get('day')
    const month = new URLSearchParams(search).get('month')
    const year = new URLSearchParams(search).get('year')
    const doctorLastName = new URLSearchParams(search).get('doctorLastName')
    const time = new URLSearchParams(search).get('time')

    return (
        <div>
            <Link to='/'>Go Back</Link>
            <div>
                <h2>Successfully Booked!</h2>
            </div>
            <div>
                <p>Hi {name} your appointment has been booked with Dr. {doctorLastName} at {time} on {day}/{month}/{year}</p>
                <p>These are the appointment details provided by you:</p>
                <p>{description}</p>
            </div>

            <p></p>
        </div>
    );
}

export default AppointmentBooked