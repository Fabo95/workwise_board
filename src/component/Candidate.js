import React from 'react'


export default function Candidate ({columnIndex, lastname, firstname, position}) {


    return (
        <>
            <p>{columnIndex}</p>
            <h1>{lastname}</h1>
            <h2>{firstname}</h2>
            <p>{position}</p>
        </>
    )
}