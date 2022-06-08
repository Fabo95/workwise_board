import React, {useContext} from 'react'
import {CandidateContext} from "../context/CandidateContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function Candidate ({index, lastname, firstname, position}) {

    const {handleFurther, handleBack} = useContext(CandidateContext)


    return (
        <div className='candidate'>
            <p className='candidate--text'><span className='bold'>Nachname:</span> {lastname}</p>
            <p className='candidate--text'><span className='bold'>Vorname: </span>{firstname}</p>
            <p className='candidate--text'><span className='bold'>Position:</span> {position}</p>
            <FontAwesomeIcon className="candidate--icon candidate--icon--left" onClick={() => handleBack(index)} icon={faArrowLeft} />
            <FontAwesomeIcon className="candidate--icon candidate--icon--right" onClick={() => handleFurther(index)} icon={faArrowRight} />
        </div>
    )
}