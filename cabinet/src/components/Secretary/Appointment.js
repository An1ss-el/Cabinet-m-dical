import React from 'react'
import '../../styles/Appointment.css'
import addCalendar from '../../assets/addCalendar-icon.png'
import patient from '../../assets/patient.png'
import calendar from '../../assets/Calendar-icon.png'
import waiting from '../../assets/waiting.png'
import PowerOff from '../../assets/PowerOff.png'
import Logo from '../../assets/Logo.png'

function Appointment() {
  return (
    <div>
      <div id="sidebar">
        <a className='links' href='#' > <img src={patient} alt='patient-icon' /> </a>
        <a className='links' href='#' > <img src={calendar} alt='calendar-icon' /> </a>
        <a className='links' href='#' > <img src={waiting} alt='waiting-icon' /> </a>
        <a id='powerOff' href='#' > <img src={PowerOff} alt='powerOff-icon' /> </a>
      </div>
      <div id='header'>
        <img id='calender' src={calendar} alt="Logo" />
        <h1>Espace secrétaire</h1>
        <img id='logo' src={Logo} alt="Logo" />
        <div id='container'>
          <a id='add-calendar' href='#' > <img src={addCalendar} alt="patient-icon-add" /> </a>
          <h2>Les Rendez-vous</h2>
        </div>
        <div id='inputs'>
          <input type="text" placeholder='Nom ou prénom' />
          <input type="date" />
          <div id='search' >
            <button>Rechercher</button>
          </div>
        </div>
        <div id='container2'>
          <h3>Liste des Rendez-vous non validés</h3>
        </div>
        <div id='table1' >
          <table>
            <tr>
              <th>Heure-RDV</th>
              <th>Date-RDV</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Téléphone</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>AA</td>
              <td>0606060606</td>
              <td id='action'>
                <input id='checkbox' type="checkbox" />
                <a href='#' > <img src={patient} alt="patient-icon" /> </a>
              </td>
            </tr>
          </table>
        </div>
        <div id='container3'>
          <h3>Liste des Rendez-vous validés</h3>
        </div>
        <div id='table1' >
          <table>
            <tr>
              <th>Heure-RDV</th>
              <th>Date-RDV</th>
              <th>Prénom</th>
              <th>Nom</th>
              <th>Téléphone</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>A</td>
              <td>A</td>
              <td>A</td>
              <td>AA</td>
              <td>0606060606</td>
              <td id='action'>
                <input id='checkbox' type="checkbox" checked />
                <a href='#' > <img src={patient} alt="patient-icon" /> </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Appointment