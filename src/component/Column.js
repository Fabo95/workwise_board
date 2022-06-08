import React, {useContext} from 'react'
import {CandidateContext} from "../context/CandidateContext"

import Candidate from './Candidate'


/* Index = eachColumn Index des Column aus ColumnArr*/
export default function Column ({index, title}) {

    const {candidateArr} = useContext(CandidateContext)

    const cadidateEl = candidateArr.map(eachCandidate => <Candidate key={index} columnIndex = {index} {...eachCandidate} />)

    function handleClick () {
        document.getElementById("root").classList.add("show")
    }

    return (
        <div className='main--item'>
                <h3>{title}</h3>
                {cadidateEl}
        {index === 0 && <button onClick={handleClick}>+</button>}
        </div>

    )
}