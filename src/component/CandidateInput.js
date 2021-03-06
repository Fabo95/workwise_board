import React, {useContext} from 'react'
import { useForm } from 'react-hook-form';
import { CandidateContext } from '../context/CandidateContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export default function Input ({isCandidateInput, handleCandidateInput}) {

    const {handleAdd} = useContext(CandidateContext)

    const classInput = isCandidateInput && "input--candidate"

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();


     function onSubmit(candidate) {
        handleAdd(candidate)
        reset()
        handleCandidateInput()

    } 

    function handleExit () {
        handleCandidateInput()
    }

    return (
        <div className={`input ${classInput}`}>
            <div className='input--item'>
            <FontAwesomeIcon onClick={handleExit} className='input--exit' icon={faXmark} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='input--label'>Vorname:</label>
                <input className='input--field' {...register('firstname', { required: true })} />
                {errors.firstname && <p>Du hast vergessen den Vornamen anzugeben </p>}
                <label className='input--label'>Nachname:</label>
                <input className='input--field' {...register('lastname', { required: true })} />
                {errors.lastName && <p>Du hast vergessen den Nachnamen anzugeben </p>}
                <label className='input--label'>Position:</label>
                <input className='input--field' {...register('position', { required: true })} />
                {errors.age && <p>Du hast vergessen den die Postion anzugeben</p>}
                <input value="Bewerber hinzufügen" className='input--submit' type="submit" />
            </form>
            </div>
        </div>
    )
}

