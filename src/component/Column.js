import React, {useContext} from 'react'
import {CandidateContext} from "../context/CandidateContext"

import Candidate from './Candidate'


/* columnIndex = index des Columns aus ColumnArr*/
export default function Column ({columnIndex, title}) {

    const {candidateArr} = useContext(CandidateContext)

        const candidateEl = candidateArr.reduce((init, eachCandidate, index) => {
            
            if (eachCandidate.statusIndex === columnIndex) {
                init.push(<Candidate key={index} index={index} {...eachCandidate} />)
            }

            return init

        }, []) 
    return (
        <div className='main--item'>
            <h3>{title}</h3>
            {candidateEl}
        </div>

    )
}