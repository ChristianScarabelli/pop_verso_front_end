import axios from "axios"
import { createContext, useEffect, useState } from "react"

// creo il context
const charactersContext = createContext()

// url base
const BASE_URI = 'http://localhost:3000'


// funzione/componente PROVIDER del context, con le funzioni
export const CharactersProvider = ({ children }) => {
    // stato per la lista dei personaggi
    const [list, setList] = useState([])

    // funzione di chiamata per la lista
    function fetchList() {
        axios.get(`${BASE_URI}/characters`)
            .then(res => {
                setList(res.data)
            })
            .catch(err => console.error('Issues in list fetching', err))
    }


    // stato per i dettagli del personaggio
    const [characterDetails, setCharacterDetails] = useState({})

    // funzione di chiamata per i dettagli del singolo personaggio
    function fetchDetails(id) {
        axios.get(`${BASE_URI}/characters/${id}`)
            .then((res) => {
                setCharacterDetails(res.data)
            })
            .catch((err) => console.error('Issues in details fetching', err));
    }

    // fetch della lista solo al primo riavvio
    useEffect(() => {
        fetchList()
    }, [])

    // passo le funzioni e stati tramite il provider
    return (
        <charactersContext.Provider value={{ list, fetchList, fetchDetails, characterDetails }}>
            {children}
        </charactersContext.Provider>
    )
}

export default charactersContext