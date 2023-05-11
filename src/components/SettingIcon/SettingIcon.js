import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import './SettingIcon.css'
const SettingIcon = () => {
  return (
    <div className='settingIcon'>
        <Link to='/setting'>
            <FontAwesomeIcon icon={faGear} className="gearicon"/>
        </Link>
    </div>
  )
}

export default SettingIcon