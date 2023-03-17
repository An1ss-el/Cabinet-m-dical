import React from 'react'
import '../../styles/Appointment.css'
import addPatient from '../../assets/addPatient.png'
import patient from '../../assets/patient.png'
import calendar from '../../assets/Calendar-icon.png'
import waiting from '../../assets/waiting.png'
import message from '../../assets/Text-message-icon.png'
import PowerOff from '../../assets/PowerOff.png'
import Logo from '../../assets/Logo.png'
import waitingList from '../../assets/waitingNote.png'
import CalendarDelete from '../../assets/CalendarDelete.png'
import greenFlag from '../../assets/green-flag.jpg'

function WaitingList() {
  return (
    <div>
      <div id="sidebar">
        <a className='links' href='#' > <img src={patient} alt='patient-icon' /> </a>
        <a className='links' href='#' > <img src={calendar} alt='calendar-icon' /> </a>
        <a className='links' href='#' > <img src={waiting} alt='waiting-icon' /> </a>
        <a id='powerOff' href='#' > <img src={PowerOff} alt='powerOff-icon' /> </a>
      </div>
      <div id='header'>
        <img id='calender' src={waiting} alt="Logo" />
        <h1>Espace secrétaire</h1>
        <img id='logo' src={Logo} alt="Logo" />
        <div id='container'>
          <a id='add-calendar' href='#' > <img src={waitingList} alt="patient-icon-add" /> </a>
          <h2>La liste d'attente</h2>
        </div>
        <div id='inputs'>
          <input type="text" placeholder='Nom ou prénom' />
          <input type="date" />
          <div id='search' >
            <button>Rechercher</button>
          </div>
        </div>
        <div id='container2'>
          <h3>La liste d'attente avec rendez-vous</h3>
        </div>
        <div className= 'table1' >
          <table>
            <tr>
              <th>Position</th>
              <th>Civilité</th>
              <th>Patient</th>
              <th>Téléphone</th>
              <th>Type</th>
              <th>Heure RDV</th>
              <th>Heure d'arriver</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Mr</td>
              <td>Anass Ayman</td>
              <td>0606060606</td>
              <td>Consultation</td>
              <td>18:00</td>
              <td>18:06</td>
              <td id='action'>
                <a href='#' > <img src={patient} alt="patient-icon" /> </a>
                <a href='#' > <img src={CalendarDelete} alt="patient-icon" /> </a>
                <a href='#' > <img src={greenFlag} alt="patient-icon" /> </a>
              </td>
            </tr>
          </table>
        </div>
        <div id='container3'>
          <h3>La liste d'attente sans rendez-vous</h3>
        </div>
        <div className= 'table1' >
          <table>
            <tr>
            <th>Position</th>
              <th>Civilité</th>
              <th>Patient</th>
              <th>Téléphone</th>
              <th>Type</th>
              <th>Heure RDV</th>
              <th>Heure d'arriver</th>
              <th>Actions</th>
            </tr>
            <tr>
            <td>1</td>
              <td>Mr</td>
              <td>Anass Ayman</td>
              <td>0606060606</td>
              <td>Consultation</td>
              <td>18:00</td>
              <td>18:06</td>
              <td id='action'>
                <a href='#' > <img src={patient} alt="patient-icon" /> </a>
                <a href='#' > <img src={CalendarDelete} alt="patient-icon" /> </a>
                <a href='#' > <img src={addPatient} alt="patient-icon" /> </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default WaitingList