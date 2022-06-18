import React, {useContext, useState} from 'react'
import {CandidateContext} from "./context/CandidateContext"
import CandidateInput from './component/CandidateInput'
import ColumnInput from "./component/ColumnInput"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Column from './component/Column'

export default function App () {

    const {columnArr} = useContext(CandidateContext)
    
    const [isCandidateInput, setIsCandidateInput] = useState(false)
    const [isColumnInput, setIsColumnInput] = useState(false)

    {/* columnIndex via props an <Column /> */}
    const columnEl = columnArr.map((eachColumn, index ) => <Column key={index} columnIndex = {index} title = {eachColumn}/>)

    function handleCandidateInput () {
        setIsCandidateInput(prevCandidateInput => {
            return !prevCandidateInput
        })
    }

    function handleColumnInput () {
        setIsColumnInput(prevColumnInput => {
            return !prevColumnInput
        })
    }

    const add = <div className='main--item'><h3>Add...</h3></div>
    const addIcon = <div onClick={handleColumnInput} className='main--item main--item--gray'><FontAwesomeIcon className="plus--icon" icon={faPlus} /></div>

    return (
        <>
            <h1>Dashboard</h1>
            <main className='main'>
                {columnArr.length > 0 ? columnEl: add} 
                {addIcon} 
            </main>
            <div className='container'>
                <button disabled={columnArr.length === 0} className='btn--add' onClick={handleCandidateInput}>Bewerber hinzufügen</button>
            </div>
            <CandidateInput isCandidateInput={isCandidateInput} handleCandidateInput={handleCandidateInput} />
            <ColumnInput isColumnInput={isColumnInput} handleColumnInput={handleColumnInput} />

            
        </>
    )
}