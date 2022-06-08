import React, {useState, useEffect, useRef} from "react";

const CandidateContext = React.createContext()

function CandidateContextProvider ({children}) {

        const [columnArr, setColumnArr] = useState(() => {
            return (
                JSON.parse(localStorage.getItem("columnArr"))?
                JSON.parse(localStorage.getItem("columnArr")):
                []
            )
        })

        const [candidateArr, setCandidateArr] = useState(() => {
            return (
                JSON.parse(localStorage.getItem("candidateArr"))?
                JSON.parse(localStorage.getItem("candidateArr")):
                []
            )
        })
        let ref = useRef(false)

        useEffect (() => {
            if (ref.current) {
                localStorage.setItem("columnArr", JSON.stringify(columnArr))
                localStorage.setItem("candidateArr", JSON.stringify(candidateArr))
            }

            else {
                ref.current = true
            }
            
        }, [columnArr, candidateArr])

        {/* fügt Column hinzu */}
        function handleColumn ({columnname}) {
            setColumnArr(prevColumnArr => {
                return [...prevColumnArr, columnname]
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