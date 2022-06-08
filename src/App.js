import React, {useContext} from 'react'
import {CandidateContext} from "./context/CandidateContext"
import CandidateInput from './component/CandidateInput'
import ColumnInput from "./component/ColumnInput"

import Column from './component/Column'

export default function App () {

    const {columnArr} = useContext(CandidateContext)

    {/* columnIndex via props an <Column /> */}
    const columnEl = columnArr.map((eachColumn, index ) => <Column key={index} columnIndex = {index} title = {eachColumn}/>)

    function handleCandidateInput () {
        document.getElementById("root").classList.add("show--candidate--input")
    }

    return (
        <>
            <h1>Dashboard</h1>
            <main className='main'>
                {columnEl}  
            </main>
            <div className='container'>
                <button className='btn--add' onClick={handleCandidateInput}>Bewerber hinzufügen</button>
            </div>
            <CandidateInput />
            <ColumnInput />

            
        </>
    )
}