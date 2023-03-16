import React from 'react'
import '../styles/Authentification.css'
import Logo from '../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Authentification() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false)

  const [value, setValue] = useState('');
  const [validationError, setValidationError] = useState(false);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (inputValue.length < 8) {
      setValidationError(true);
    } else {
      setValidationError(false);
    }
  }

  const inputStyle = {
    borderColor: validationError && 'red',
    borderWidth: 2
  }

  return (
    <div className='container'>
      <div className='logo'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='form' >
        <div id='user'><span><FontAwesomeIcon icon={faUser} /> </span>
          <input type="text" placeholder='Utilisateur' id="username" /></div>
        <div><span id='key'><FontAwesomeIcon icon={faKey} /> </span>
          <input passwordIsValid type={passwordIsVisible ? "text" : "password"} value={value}
            onChange={handleChange} style={inputStyle} placeholder='Mot de pass' id="password" />
          <button onClick={() => setPasswordIsVisible(!passwordIsVisible)} id='eye'> {passwordIsVisible ? <FontAwesomeIcon icon={faEye} />
            : <FontAwesomeIcon icon={faEyeSlash} />}</button></div>
        <submit>Se connecter</submit>
      </div>
    </div>
  )
}



export default Authentification
