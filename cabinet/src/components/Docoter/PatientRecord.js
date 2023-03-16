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
                <a className='links' href='#' > <img src={message} alt='message-icon' /> </a>
                <a id='powerOff' href='#' > <img src={PowerOff} alt='powerOff-icon' /> </a>
            </div>
            <main>
                <img id='patient' src={patient} alt="Logo" />
                <h1>Espace medecin</h1>
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
                    <div className='section'>
                        <h3>Historique DT</h3>
                    </div>
                    <section id='dt'>
                        <label for='dateDt'>Date de découverte:</label>
                        <input type='date' name='dateDt' id='dateDt' /><br></br>
                        <label for='shéma'>Shéma actuel:</label>
                        <input type='text' name='shéma' id='shéma' /><br></br>
                        <label for='autres'>Autres:</label>
                        <input type='text' name='autres' id='autres' />
                    </section>
                    <div className='section'>
                        <h3>Les antécédents</h3>
                    </div>
                    <section id='antecedents'>
                        <label for='atcdM'>ATCD Medicaux:</label>
                        <input type='text' name='atcdM' id='atcdM' /><br></br>
                        <label for='atcdC'>ATCD Chirugicaux:</label>
                        <input type='text' name='atcdC' id='atcdC' /><br></br>
                        <label for='atcdF'>ATCD Familiaux:</label>
                        <input type='text' name='atcdF' id='atcdF' /><br></br>
                        <label for='facteur'>Facteur du Risque:</label>
                        <input type='text' name='facteur' id='facteur' /><br></br>
                        <label for='allergies'>Allergies:</label>
                        <input type='text' name='allergies' id='allergies' /><br></br>
                        <label for='traitement'>Traitement:</label>
                        <input type='text' name='traitement' id='traitement' />
                    </section>
                    <div className='section'>
                        <h3>Examen Clinique</h3>
                    </div>
                    <section id='examen'>
                        <label for='poids'>Poids:</label>
                        <input type='number' name='poids' id='poids' /><br></br>
                        <label for='ces'>CES:</label>
                        <input type='text' name='ces' id='ces' /><br></br>
                        <label for='pieds'>Examen des Pieds:</label>
                        <input type='text' name='pieds' id='pieds' /><br></br>
                        <label for='feherol'>Examen Feherol:</label>
                        <input type='text' name='feherol' id='feherol' /><br></br>
                        <label for='IIO'>IIO:</label>
                        <input type='text' name='IIO' id='IIO' /><br></br>
                        <label for='signe'>Signe Arteriopathique:</label>
                        <input type='text' name='IIO' id='IIO' /><br></br>
                        <label for='secs' >SECS:</label>
                        <input type='text' name='secs' id='secs' /><br></br>
                        <label for='autres' >Autres:</label>
                        <input type='text' name='autres2' id='autres2' />
                    </section>
                    <div className='section'>
                        <h3>Microangiopathie</h3>
                    </div>
                    <section id='micro'>
                        <label for='hypo'>hypotension Orthostatique:</label>
                        <input type='text' name='hypo' id='hypo' /><br></br>
                        <label for='ndsd'>NDSD:</label>
                        <input type='text' name='ndsd' id='ndsd' /><br></br>
                        <label for='nerfs'>Nerfs Crâniens:</label>
                        <input type='text' name='nerfs' id='nerfs' /><br></br>
                        <label for='gros'>Gros Hypocrite:</label>
                        <input type='text' name='gros' id='gros' /><br></br>
                        <label for='dysurie'>Dysurie:</label>
                        <input type='text' name='dysurie' id='dysurie' /><br></br>
                        <label for='hypo'>Hypoglycémie Non Ressentie:</label>
                        <input type='text' name='hypo' id='hypo' /><br></br>
                    </section>
                    <div className='section'>
                        <h3>Facteur du risque CV</h3>
                    </div>
                    <section id='facteur-cv'>
                        <label for='hta'>HTA:</label>
                        <input type='text' name='hta' id='hta' /><br></br>
                        <label for='dysli'>Dyslipidémie:</label>
                        <input type='text' name='dysli' id='dysli' /><br></br>
                        <label for='avc'>AVC:</label>
                        <input type='text' name='avc' id='avc' /><br></br>
                        <label for='mb'>Artérite des MbInf:</label>
                        <input type='text' name='mb' id='mb' /><br></br>
                        <label for='aap'>AAP:</label>
                        <input type='text' name='aap' id='aap' /><br></br>
                        <label for='mb'>Goutte:</label>
                        <input type='text' name='goutte' id='goutte' /><br></br>
                        <label for='cardio'>Insuffisance Cardiaque:</label>
                        <input type='text' name='cardio' id='cardio' /><br></br>
                    </section>
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