import React, {useContext} from 'react'
import {CandidateContext} from "./context/CandidateContext"

import Column from './component/Column'

export default function App () {

    const {columnArr} = useContext(CandidateContext)

    const columnEl = columnArr.map(column => {
        return <Column title = {column}/>
    })

    return (
        <>
            <h1>Dashboard</h1>
            <main className='main'>
                {columnEl}
            </main>
        </>
    )
}