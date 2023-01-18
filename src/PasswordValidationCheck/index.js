import React, { useState } from 'react';
import "./style.css";
import Icon from 'react-icons-kit';
import {basic_eye} from 'react-icons-kit/linea/basic_eye'
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed';
import {arrows_exclamation} from 'react-icons-kit/linea/arrows_exclamation'
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check'

// React Password Validation Check | Show and Hide passwords in React

function PasswordValidationCheck() {
    const [type, setType] = useState('password');

    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);    // Special Characters
    const [lengthValidated, setLengthValidated] = useState(false);   // Characters length

    const onHandleChange = (value) => {
        let lower = new RegExp('(?=.*[a-z])');
        let upper = new RegExp('(?=.*[A-Z])');
        let number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})');

        if(lower.test(value)) {
            setLowerValidated(true);
        } else {
            setLowerValidated(false);
        }
        if(upper.test(value)) {
            setUpperValidated(true);
        } else {
            setUpperValidated(false);
        }
            if(number.test(value)) {
            setNumberValidated(true);
        } else {
            setNumberValidated(false);
        }
            if(special.test(value)) {
            setSpecialValidated(true);
        } else {
            setSpecialValidated(false);
        }
            if(length.test(value)) {
            setLengthValidated(true);
        } else {
            setLengthValidated(false);
        }
    }
  return (
    <div className='wrapper'>
        <div className="box">
                    <label>Password</label>
                    <div className='input-with-icon-div form-control'>
                    <input type={type} 
                    className="custom-input" onChange={(e)=>onHandleChange(e.target.value)} placeholder='Enter Password' />
                    {type=="password" ? (
                        <span className='icon-span' onClick={()=>setType("text")}>
                            <Icon icon={basic_eye_closed} size={18} />
                        </span>
                    ) : (
                        <span className='icon-span' onClick={()=>setType("password")}>
                            <Icon icon={basic_eye} size={18} />
                        </span>
                    )}
                    </div>

                    {/* Validated Tracker */}
                    <main className="tracker-box">
                        <div className={lowerValidated ? "validated" : "not-validated"}>
                            {lowerValidated ? (
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check} />
                                </span>
                            ): (
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation} />
                            </span>
                            )}
                            At least one lowerCase letter
                        </div>
                        <div className={upperValidated ? "validated" : "not-validated"}>
                            {upperValidated ? (
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check} />
                                </span>
                            ): (
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation} />
                            </span>
                            )}
                            At least one upperCase letter
                        </div>
                        <div className={numberValidated ? "validated" : "not-validated"}>
                            {numberValidated ? (
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check} />
                                </span>
                            ): (
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation} />
                            </span>
                            )}
                            At least one number
                        </div>
                        <div className={specialValidated ? "validated" : "not-validated"}>
                            {specialValidated ? (
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check} />
                                </span>
                            ): (
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation} />
                            </span>
                            )}
                            At least one special Character 
                        </div>
                        <div className={lengthValidated ? "validated" : "not-validated"}>
                            {lengthValidated ? (
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check} />
                                </span>
                            ): (
                            <span className='list-icon'>
                                <Icon icon={arrows_exclamation} />
                            </span>
                            )}
                            At least 8 Characters
                        </div>
                    </main>
        </div>
    </div>
  )
}

export default PasswordValidationCheck;