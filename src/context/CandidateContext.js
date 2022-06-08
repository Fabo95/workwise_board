import React, {useState, useEffect, useRef} from "react";

const CandidateContext = React.createContext()

function CandidateContextProvider ({children}) {

        const [columnArr, setColumnArr] = useState(["Bewerber", "Kennenlernen", "Probearbeit", "Entscheidung", "Abgeschlossen"])

        const [candidateArr, setCandidateArr] = useState([{lastname: "Fabian", firstname: "Hinz", position: "Frontend"}])

        return (
            <CandidateContext.Provider value={{columnArr, candidateArr}}>
                {children}
            </CandidateContext.Provider>
        )
}

export {CandidateContext, CandidateContextProvider}