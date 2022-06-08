import React, {useState, useEffect, useRef} from "react";

const CandidateContext = React.createContext()

function CandidateContextProvider ({children}) {

        const [columnArr, setColumnArr] = useState(["Bewerber", "Kennenlernen", "Probearbeit", "Entscheidung", "Abgeschlossen"])

        const [candidateArr, setCandidateArr] = useState([])

        return (
            <CandidateContext.Provider value={{columnArr}}>
                {children}
            </CandidateContext.Provider>
        )
}

export {CandidateContext, CandidateContextProvider}