import React, {useContext} from 'react'
import {CandidateContext} from "./context/CandidateContext"
import Input from './component/Input'

import Column from './component/Column'

export default function App () {

    const {columnArr} = useContext(CandidateContext)

    {/* eachColumn Index via props an <Column /> */}
    const columnEl = columnArr.map((eachColumn, index ) => <Column key={index} index = {index} title = {eachColumn}/>)

    return (
        <>
            <h1>Dashboard</h1>
            <main className='main'>
                {columnEl}
            </main>
            <Input />
        </>
    )
}