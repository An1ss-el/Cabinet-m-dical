import React from 'react'
import '../../styles/Patient-record.css'
import patientNote from '../../assets/patientNote.png'
import patient from '../../assets/patient.png'
import addPatient from '../../assets/addPatient.png'
import calendar from '../../assets/Calendar-icon.png'
import waiting from '../../assets/waiting.png'
import message from '../../assets/Text-message-icon.png'
import PowerOff from '../../assets/PowerOff.png'
import Logo from '../../assets/Logo.png'

function Record() {
    return (
        <div>
            <div id="sidebar">
                <a className='links' href='#' > <img src={patient} alt='patient-icon' /> </a>
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
                    <h2>Création de dossier</h2>
                </div>

                <form>
                    <div className='section'>
                        <h3>Informations de patient</h3>
                    </div>
                    <section id='infos'>
                        <label for="civilite">Civilité:</label>
                        <select id='civilite' name='civilite'>
                            <option>Mr</option>
                            <option>Mme</option>
                            <option>Mlle</option>
                        </select>
                        <input type='text' name='prenom' id='prenom' placeholder='Prénom' />
                        <input type='text' name='nom' id='nom' placeholder='Nom' />
                        <label for="dateNaiss">Date de naissance:</label>
                        <input type='date' name='dateNaiss' id='dateNaiss' />
                        <input type='text' name='cin' id='cin' placeholder='CIN' />
                        <input type='number' name='tel' id='tel' placeholder='Téléphone' />
                        <input type='text' name='adress' id='adress' placeholder='Adresse' />
                        <input type='text' name='ville' id='ville' placeholder='Ville' />
                        <input type='email' name='email' id='email' placeholder='E-mail' />
                        <label for="sanguin" >Le groupe sanguin:</label>
                        <select name='sanguin' id='sanguin'>
                            <option>
                                O-
                            </option>
                            <option>
                                O+
                            </option>
                            <option>
                                B-
                            </option>
                            <option>
                                B+
                            </option>
                            <option>
                                A-
                            </option>
                            <option>
                                A+
                            </option>
                            <option>
                                AB-
                            </option>
                            <option>
                                AB+
                            </option>
                        </select>
                        <label for="assurance" >Assurance:</label>
                        <select name='assurance' id='assurance'>
                            <option>Sans</option>
                            <option>AMO</option>
                            <option>FAR</option>
                            <option>MCMA</option>
                            <option>AXA</option>
                            <option>Saham</option>
                            <option>Wafa</option>
                            <option>CNOPS</option>
                            <option>RMA</option>
                            <option>Taamine chaabi</option>
                            <option>Atlanta Sanad</option>
                            <option>Allianz</option>
                        </select>
                        <label for="dateCre">Date de création:</label>
                        <input type='date' name='dateCre' id='dateCre' />
                    </section>
                    {/* <div className='section'>
                        <h3>Paiment</h3>
                    </div>
                    <section id='dt'>
                        <label for='payer'>Le montant à payer:</label>
                        <input type='number' name='payer' id='payer' /><br></br>
                    </section> */}
                    <div id='btn'>
                        <submit>Enregistrer</submit>
                        <button type='reset'>Vider</button>
                    </div>
                </form>
            </main>
        </div>


    )
}

export default Record