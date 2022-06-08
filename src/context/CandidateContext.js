import React, {useState, useEffect, useRef} from "react";

const CandidateContext = React.createContext()

function CandidateContextProvider ({children}) {

        const [columnArr, setColumnArr] = useState(["Bewerber", "Kennenlernen", "Probearbeit", "Entscheidung", "Abgeschlossen"])

        const [candidateArr, setCandidateArr] = useState([])


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

        return (
            <CandidateContext.Provider value={{columnArr, candidateArr, handleAdd, handleFurther, handleBack}}>
                {children}
            </CandidateContext.Provider>
        )
}

export {CandidateContext, CandidateContextProvider}