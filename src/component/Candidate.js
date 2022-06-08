import React, {useContext, useState} from 'react'
import {CandidateContext} from "../context/CandidateContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'


export default function Candidate ({index, lastname, firstname, position, statusIndex}) {

    const {handleFurther, handleBack, handleRemove, columnArr} = useContext(CandidateContext)

    const [hovered, setHovered] = useState(false)

    function handleHover() {
        setHovered(prevHovered => !prevHovered)
    }

    {/* Returned Icons in Abhängigkeit von statusIndex des Bewerbers */}
    function getIcon () {

        if (statusIndex === 0) {
            return <FontAwesomeIcon className="candidate--icon candidate--icon--right" onClick={() => handleFurther(index)} icon={faArrowRight} />
        }

        else if (statusIndex === columnArr.length - 1) {
            return <FontAwesomeIcon className="candidate--icon candidate--icon--left" onClick={() => handleBack(index)} icon={faArrowLeft} />
        }

        else {
            return (
            <>
                <FontAwesomeIcon className="candidate--icon candidate--icon--left" onClick={() => handleBack(index)} icon={faArrowLeft} />
                <FontAwesomeIcon className="candidate--icon candidate--icon--right" onClick={() => handleFurther(index)} icon={faArrowRight} />
            </>)
        }
    }

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='candidate'>
            {hovered && <FontAwesomeIcon className="candidate--icon candidate--icon--remove" onClick={() => handleRemove(index)}  icon={faTrashCan} />}
            <p className='candidate--text'><span className='bold'>Nachname:</span> {lastname}</p>
            <p className='candidate--text'><span className='bold'>Vorname: </span>{firstname}</p>
            <p className='candidate--text'><span className='bold'>Position:</span> {position}</p>
            {getIcon()}
        </div>
    )
}