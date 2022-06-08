import React from 'react'
import { useForm } from 'react-hook-form';

export default function Input () {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();


     function onSubmit(data) {
         console.log(data);
    } 


    return (
        <div className='input'>
            <div className='input--item'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='input--label'>Vorname:</label>
                <input className='input--field' {...register('firstName', { required: true })} />
                {errors.firstname && <p>Du hast vergessen den Vornamen anzugeben </p>}
                <label className='input--label'>Nachname:</label>
                <input className='input--field' {...register('lastName', { required: true })} />
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

