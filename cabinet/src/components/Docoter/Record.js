import React from 'react'
import '../../styles/Record.css'
import patientNote from '../../assets/patientNote.png'
import patient from '../../assets/patient.png'
import addPatient from '../../assets/addPatient.png'
import doctor from '../../assets/People-Doctor-Female-icon.png'
import addDoctor from '../../assets/DoctorAdd.png'
import DoctorNote from '../../assets/DoctorNote.png'
import calendar from '../../assets/Calendar-icon.png'
import Addcalendar from '../../assets/CalendarAdd.png'
import waiting from '../../assets/waiting.png'
import message from '../../assets/Text-message-icon.png'
import PowerOff from '../../assets/PowerOff.png'
import Logo from '../../assets/Logo.png'
import edit from '../../assets/editor-icon.png'

function Record() {
    return (
        <div>
            <div id="sidebar">
                <a className='links' href='#' > <img src={patient} alt='patient-icon' /> </a>
                <a className='links' href='#' > <img src={doctor} alt='patient-icon' /> </a>
                <a className='links' href='#' > <img src={calendar} alt='calendar-icon' /> </a>
                <a className='links' href='#' > <img src={waiting} alt='waiting-icon' /> </a>
                <a id='powerOff' href='#' > <img src={PowerOff} alt='powerOff-icon' /> </a>
            </div>
            <main>
                <img id='patient' src={patient} alt="Logo" />
                <h1>Espace secrétaire</h1>
                <img id='logo' src={Logo} alt="Logo" />
                <div id='container'>
                    <a id='add-patient' href='#' > <img src={patientNote} alt="patient-icon-add" /> </a>
                    <a id='add-patient' href='#' > <img src={addDoctor} alt="patient-icon-add" /> </a>
                    <a id='add-patient' href='#' > <img src={Addcalendar} alt="patient-icon-add" /> </a>
                    <a id='add-patient' href='#' > <img src={waiting} alt="patient-icon-add" /> </a>
                    <a id='add-patient' href='#' > <img src={edit} alt="patient-icon-add" /> </a>
                    <h2>Mr anass ellaoui</h2>
                    <h3>Depuis 2 ans</h3>
                </div>
                <div className='section'>
                    <h3>Informations de patient</h3>
                </div>
                <section id='infos'>
                    <p className='infosP'>Civilité:</p>
                    <p>Mr</p>
                    <p className='infosP'>Nom:</p>
                    <p>Ellaoui</p>
                    <p className='infosP'>Prénom:</p>
                    <p>Anass</p>
                    <p className='infosP'>Age:</p>
                    <p>19 ans (29/10/2003)</p>
                    <p className='infosP'>Type d'assurance:</p>
                    <p>AMO</p>
                    <p className='infosP'>Le groupe sanguin:</p>
                    <p>A+</p>
                    <p className='infosP'>Date de création:</p>
                    <p>22/03/2021</p>
                </section>
                <div className='section'>
                    <h3>Adresse et contact</h3>
                </div>
                <section id='adresse'>
                    <p className='infosP'>Téléphone:</p>
                    <p>0605040321</p>
                    <p className='infosP'>E-mail:</p>
                    <p>anass@gmail.com</p>
                    <p className='infosP'>Ville:</p>
                    <p>Casablanca</p>
                    <p className='infosP'>Adresse:</p>
                    <p> Résidence Al Assil IMM10 APP17 Hay Al Mohammadi</p>
                </section>
                <div className='section'>
                    <h3>Historique des maladies</h3>
                </div>
                <section id='dt'>
                    <p className='infosP'>Date de découverte:</p>
                    <p>09/04/2019</p>
                    <p className='infosP'>ATCD Medicaux:</p>
                    <p>Je ne sais pas</p>
                    <p className='infosP'>ATCD Chirugicaux:</p>
                    <p>Je ne sais pas</p>
                    <p className='infosP'>ATCD Familiaux:</p>
                    <p>Je ne sais pas</p>
                </section>

            </main>
        </div>
    )
}

export default Record