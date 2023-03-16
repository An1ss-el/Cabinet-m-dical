import React from 'react'
import '../../styles/Patient-list.css'
import patientNote from '../../assets/patientNote.png'
import patient from '../../assets/patient.png'
import addPatient from '../../assets/addPatient.png'
import calendar from '../../assets/Calendar-icon.png'
import waiting from '../../assets/waiting.png'
import PowerOff from '../../assets/PowerOff.png'
import Logo from '../../assets/Logo.png'

function Secretary() {
    return (
        <div>
            <div id="sidebar">
                <a className='links' href='#' > <img src={patient} alt='patient-icon' /> </a>
                <a className='links' href='#' > <img src={calendar} alt='calendar-icon' /> </a>
                <a className='links' href='#' > <img src={waiting} alt='waiting-icon' /> </a>
                <a id='powerOff' href='#' > <img src={PowerOff} alt='powerOff-icon' /> </a>
            </div>
            <div id='header'>
                <img id='patient' src={patientNote} alt="Logo" />
                <h1>Espace secrétaire</h1>
                <img id='logo' src={Logo} alt="Logo" />
                <div id='container'>
                    <a id='add-patient' href='#' > <img src={addPatient} alt="patient-icon-add" /> </a>
                    <h2>Listes des patients</h2>
                </div>
                <div id='inputs' >
                    <input type="text" placeholder='Nom ou prénom' />
                    <input type="tel" placeholder='Téléphone' />
                    <input type="text" placeholder='CIN' />
                    <input type="date" />
                </div>
                <div id='search' >
                    <button>Rechercher</button>
                </div>
                <div id='table'>
                    <table>
                        <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Âge</th>
                            <th>Téléphone</th>
                            <th>Email</th>
                            <th>Assurance</th>
                            <th>Ville</th>
                            <th>Action</th>
                        </tr>

                        <tr>
                            <td id='civilité' >Mr</td>
                            <td>Ellaoui</td>
                            <td>Anass</td>
                            <td>19 ans</td>
                            <td>0605040321</td>
                            <td>anass@gmail.com</td>
                            <td>CNSS</td>
                            <td>Casablanca</td>
                            <td id='action'>
                                <a href='#' > <img src={patient} alt="patient-icon" /> </a>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default Secretary