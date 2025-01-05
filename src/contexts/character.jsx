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
                const mappedDetails = {
                    ...res.data,
                    shadow: res.data.shadow === 0 ? 'Yes' : 'No'
                }
                setCharacterDetails(mappedDetails)
            })
            .catch((err) => console.error('Issues in team details fetching:'))
    }

    // stato per la lista dei personaggi
    const [teamsList, setTeamsList] = useState([])

    // funzione di chiamata per la lista
    function fetchTeams() {
        axios.get(`${BASE_URI}/teams`)
            .then(res => {
                setTeamsList(res.data)
            })
            .catch(err => console.error('Issues in teams fetching', err))
    }

    // stato per i dettagli del personaggio
    const [teamDetails, setTeamDetails] = useState({})

    // funzione di chiamata per i dettagli del singolo personaggio
    function fetchTeamDetails(id) {
        axios.get(`${BASE_URI}/teams/${id}`)
            .then((res) => {
                setTeamDetails(res.data)
            })
            .catch((err) => console.error('Issues in team details fetching', err));
    }
    // fetch della lista personaggi e dei teams solo al primo riavvio
    useEffect(() => {
        fetchList()
        fetchTeams()
    }, [])

    // passo le funzioni e stati tramite il provider
    return (
        <charactersContext.Provider value={{ list, fetchList, fetchDetails, characterDetails, setCharacterDetails, teamsList, fetchTeams, fetchTeamDetails, teamDetails, setTeamDetails }}>
            {children}
        </charactersContext.Provider>
    )
}

export default charactersContext