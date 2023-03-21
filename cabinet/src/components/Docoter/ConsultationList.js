import React from 'react'
import '../../styles/Consultation-list.css'
import patientNote from '../../assets/patientNote.png'
import patient from '../../assets/patient.png'
import doctor from '../../assets/People-Doctor-Female-icon.png'
import addDoctor from '../../assets/DoctorAdd.png'
import DoctorNote from '../../assets/DoctorNote.png'
import calendar from '../../assets/Calendar-icon.png'
import waiting from '../../assets/waiting.png'
import PowerOff from '../../assets/PowerOff.png'
import Logo from '../../assets/Logo.png'

function consultation() {
    return (
        <div>
            <div id="sidebar">
                <a className='links' href='#' > <img src={patient} alt='patient-icon' /> </a>
                <a className='links' href='#' > <img src={doctor} alt='patient-icon' /> </a>
                <a className='links' href='#' > <img src={calendar} alt='calendar-icon' /> </a>
                <a className='links' href='#' > <img src={waiting} alt='waiting-icon' /> </a>
                <a id='powerOff' href='#' > <img src={PowerOff} alt='powerOff-icon' /> </a>
            </div>
            <div id='header'>
                <img id='patient' src={DoctorNote} alt="Logo" />
                <h1>Espace medecin</h1>
                <img id='logo' src={Logo} alt="Logo" />
                <div id='container'>
                    <a id='add-patient' href='#' > <img src={addDoctor} alt="patient-icon-add" /> </a>
                    <h2>Listes des consultations</h2>
                </div>
                <div id='inputs' >
                <input type="text" placeholder='Nom ou prénom' />
                <input type="date" />
                </div>
                <div id='search' >
                    <button>Rechercher</button>
                </div>
                <div id='table'>
                    <table>
                        <tr>
                            <th>Civilité</th>
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
                                <a href='#' > <img src={patientNote} alt="patient-icon" /> </a>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default consultation