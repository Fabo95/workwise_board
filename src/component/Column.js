import React, {useContext} from 'react'
import {CandidateContext} from "../context/CandidateContext"

import Candidate from './Candidate'


/* columnIndex des Column aus ColumnArr*/
export default function Column ({columnIndex, title}) {

    const {candidateArr} = useContext(CandidateContext)

    const cadidateEl = candidateArr.map((eachCandidate, index) => {

        {/* Prüfung, ob der Candidate in diesem Column gerendert werden soll*/}
        return (
            eachCandidate.statusIndex === columnIndex &&
            <Candidate key={index} index={index} {...eachCandidate} />
            )
    })

    function handleClick () {
        document.getElementById("root").classList.add("show")
    }

    return (
        <div className='main--item'>
                <h3>{title}</h3>
                {cadidateEl}
        {columnIndex === 0 && <button onClick={handleClick}>+</button>}
        </div>

    )
}