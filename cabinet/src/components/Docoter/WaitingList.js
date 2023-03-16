import React from 'react'
import '../../styles/Waiting-list.css'
import patientNote from '../../assets/patientNote.png'
import patient from '../../assets/patient.png'
import addPatient from '../../assets/addPatient.png'
import calendar from '../../assets/Calendar-icon.png'
import waiting from '../../assets/waiting.png'
import message from '../../assets/Text-message-icon.png'
import PowerOff from '../../assets/PowerOff.png'
import Logo from '../../assets/Logo.png'

function WaitingList() {
    return (
        <div>
            <div id="sidebar">
                <a className='links' href='#' > <img src={patient} alt='patient-icon' /> </a>
                <a className='links' href='#' > <img src={calendar} alt='calendar-icon' /> </a>
                <a className='links' href='#' > <img src={waiting} alt='waiting-icon' /> </a>
                <a className='links' href='#' > <img src={message} alt='message-icon' /> </a>
                <a id='powerOff' href='#' > <img src={PowerOff} alt='powerOff-icon' /> </a>
            </div>
            <main>
                <img id='waiting' src={waiting} alt="Logo" />
                <h1>Espace medecin</h1>
                <img id='logo' src={Logo} alt="Logo" />
                <div id='container'>
                    <a id='add-patient' href='#' > <img src={patientNote} alt="patient-icon-add" /> </a>
                    <h2>La liste d'attente </h2>
                </div>
            </main>
        </div>
    )
}

export default WaitingList