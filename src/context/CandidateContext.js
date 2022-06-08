import React, {useState} from "react";

const CandidateContext = React.createContext()

function CandidateContextProvider ({children}) {

        const [columnArr, setColumnArr] = useState(["Add..."])

        const [candidateArr, setCandidateArr] = useState([])

        {/* fügt Column hinzu */}
        function handleColumn ({columnname}) {
            setColumnArr(prevColumnArr => {
                const newColumArr = prevColumnArr.filter(column => {
                    return column !== "Add..."
                })
                return [...newColumArr, columnname]
            })
        }


        {/* fügt Candidate hinzu */}
        function handleAdd (candidate) {
            setCandidateArr(prevCandidateArr => {
                return [...prevCandidateArr, {...candidate, statusIndex: 0}]
            })
        }

        {/* handelt statusIndex der Candidates und geht einen Wert vor*/}
        function handleFurther (candidateIndex) {
            setCandidateArr(prevCandidateArr => {
                return (prevCandidateArr.map((candidate, index) =>{
                    return (index === candidateIndex ?
                    {...candidate, statusIndex: candidate.statusIndex + 1 }:
                    candidate)
                }))
            })
        }

        {/* handelt statusIndex der Candidates und geht einen Wert zurück*/}
        function handleBack (candidateIndex) {
            setCandidateArr(prevCandidateArr => {
                return (prevCandidateArr.map((candidate, index) =>{
                    return (index === candidateIndex ?
                    {...candidate, statusIndex: candidate.statusIndex - 1 }:
                    candidate)
                }))
            })
        }

        {/* removed einen Candidate*/}
        function handleRemove (candidateIndex) {
            setCandidateArr(prevCandidateArr => {
                return (prevCandidateArr.filter((candidate, index) => {
                    return (index !== candidateIndex)
                }))
            })
        }

        return (
            <CandidateContext.Provider value={{columnArr, candidateArr, handleAdd, handleFurther, handleBack, handleRemove, handleColumn}}>
                {children}
            </CandidateContext.Provider>
        )
}

export {CandidateContext, CandidateContextProvider}