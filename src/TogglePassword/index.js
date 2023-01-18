import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

function TogglePassword() {
    const [type, setType] = useState('password');
    const [eyeIcon, setEyeIcon] = useState(eyeOff);

    const togglePassword = () => {
        if(type === "password") {
            setEyeIcon(eye);
            setType("text");
        } else {
            setEyeIcon(eyeOff);
            setType("password");
        }
    }
  return (
    <div>
        <h1>Toggle Password</h1>
        <div className='mt-5'>
            <label>Password: &nbsp;</label>
            <input type={type} placeholder="Enter Password" />
            <span onClick={togglePassword}>
                <Icon icon={eyeIcon} />
        </span>
        </div>
    </div>
  )
}

export default TogglePassword