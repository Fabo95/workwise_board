import React, {useContext} from 'react'
import {CandidateContext} from "../context/CandidateContext"

import Candidate from './Candidate'


/* columnIndex = index des Columns aus ColumnArr*/
export default function Column ({columnIndex, title}) {

    const {candidateArr} = useContext(CandidateContext)

    const cadidateEl = candidateArr.map((eachCandidate, index) => {
        {/* Prüfung, ob der Candidate in diesem Column gerendert werden soll*/}
        return (
            eachCandidate.statusIndex === columnIndex &&
            <Candidate key={index} index={index} {...eachCandidate} />
            )
        })
    return (
        <div className='main--item'>
            <h3>{title}</h3>
            {cadidateEl}
        </div>

    )
}