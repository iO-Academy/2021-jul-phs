import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingCalendar.css'

import '../TimeSlots/TimeSlots'
import '../BookAppointmentForm/BookAppointmentForm'
import TimeSlots from "../TimeSlots/TimeSlots";
import BookAppointmentForm from "../BookAppointmentForm/BookAppointmentForm";

const BookingCalendar = (props) => {
    const today = new Date()
    const tomorrow = new Date(today)
    const maxDate = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    maxDate.setDate(maxDate.getDate() + 90)

    const [value, onChange] = useState(tomorrow)
    const [minDate, setMinDate] = useState(tomorrow)
    const [bookedAppointments, setBookedAppointments] = useState([])
    const [appointmentTime, setAppointmentTime] = useState(null)
    const [day, setDay] = useState(value.getDate().toString())
    const [month, setMonth] = useState((value.getMonth() + 1).toString())
    const [year, setYear] = useState(value.getFullYear().toString())
    const [date, setDate] = useState(day + month + year)


    return (
        value.getDay() !== 6 && value.getDay() !== 0 ?
            <div id="availabilityContainer" className={"availabilityContainer"}>
                <h2>2. Choose day and time</h2>
                <div className={"calendarAndTimeSlots"}>
                    <Calendar className="calendar" onChange={onChange} value={value} minDate={minDate} minDetail="month"
                              next2Label={null} prev2Label={null} maxDate={maxDate}/>
                    <TimeSlots appointmentTime={appointmentTime} setAppointmentTime={setAppointmentTime} bookedAppointments={bookedAppointments} />
                </div>
                <BookAppointmentForm appontmentTime={appointmentTime} currentDoctor={props.currentDoctor}
                                     date={date} setBookedAppointments={setBookedAppointments} appointmentTime={appointmentTime}
                                     day={day} month={month} year={year} date={date} value={value}/>
            </div>
            :
            <div id="availabilityContainer" className="availabilityContainer">
                <h2>2. Choose day and time</h2>
                <Calendar onChange={onChange} value={value} minDate={minDate} className="calendar"/>
                <div className={"calendarErrorMessage"}>
                    <p>The surgery is closed on the weekends. Please, select a day from Monday to Friday.</p>
                </div>
            </div>
    )
}
export default BookingCalendar