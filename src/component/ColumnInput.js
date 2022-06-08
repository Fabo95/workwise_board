import React, {useContext} from 'react'
import { useForm } from 'react-hook-form';
import { CandidateContext } from '../context/CandidateContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export default function Input ({isColumnInput, handleColumnInput}) {

    const {handleColumn} = useContext(CandidateContext)

    const classInput = isColumnInput && "input--column"

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

     function onSubmit(columnname) {
        handleColumn(columnname)
        reset()
        handleColumnInput()


    } 

    function handleExit () {
        handleColumnInput()
    }

    return (
        <div className={`input ${classInput}`}>
            <div className='input--item'>
            <FontAwesomeIcon onClick={handleExit} className='input--exit' icon={faXmark} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='input--label'>Columnname:</label>
                <input className='input--field' {...register('columnname', { required: true })} />
                {errors.age && <p>Du hast vergessen den Columnnamen anzugeben</p>}
                <input value="Column hinzufügen" className='input--submit' type="submit" />
            </form>
            </div>
        </div>
    )
}

