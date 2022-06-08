import React, {useContext} from 'react'
import {CandidateContext} from "../context/CandidateContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Candidate from './Candidate'


/* columnIndex = index des Columns aus ColumnArr*/
export default function Column ({columnIndex, title}) {

    const {columnArr, candidateArr} = useContext(CandidateContext)

    const cadidateEl = candidateArr.map((eachCandidate, index) => {

        {/* Prüfung, ob der Candidate in diesem Column gerendert werden soll*/}
        return (
            eachCandidate.statusIndex === columnIndex &&
            <Candidate key={index} index={index} {...eachCandidate} />
            )
    })

    function handleColumnInput () {
        document.getElementById("root").classList.add("show--column--input")
    }

    return (
        <div className='main--item'>
                <div className='main--item--flex'>
                    <h3>{title}</h3>
                    {columnIndex === columnArr.length - 1 && <FontAwesomeIcon onClick={handleColumnInput} className="plus--icon" icon={faPlus} />}
                </div>
                {cadidateEl}
        </div>

    )
}