import React from "react";
import './DoctorDropdownMenu.css'

const DoctorDropdownMenu = (props) => {

    const handleChange = (index) => {
        props.setCurrentDoctor(props.allDoctors[index])
    }

    return (
        <div>
            <select onChange={e => handleChange(e.target.value)} name={"doctors"} id={"doctorsDropdown"} className={"doctorsDropdown"}>
                {props.allDoctors.map((doctor, index) => {
                    return (
                        <option value={index}>Dr. {doctor.firstName + ' ' + doctor.lastName}</option>
                    )
                })}
            </select>
        </div>
    );
}

export default DoctorDropdownMenu