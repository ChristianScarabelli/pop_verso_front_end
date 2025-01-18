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
        axios.get(`${BASE_URI}/characters`, {
            params: {
                search: search,
            }
        })
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
        axios.get(`${BASE_URI}/teams`, {
            params: {
                search: search,
            }
        })
            .then(res => {
                setTeamsList(res.data)
            })
            .catch(err => console.error('Issues in teams fetching', err))
    }

    // stato per i dettagli del personaggio
    const [teamDetails, setTeamDetails] = useState([])

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

    // oggetto vuoto per il form
    const initialFormData = {
        name: '',
        age: '',
        description: '',
        shadow: '',
    }

    // stato per i dati del form
    const [formData, setFormData] = useState(initialFormData)

    // funzione onChange degli input
    function onChange(e) {
        const { value, checked, type, name } = e.target

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    // funzione per il submit del form
    function onSubmit(e) {
        e.preventDefault()
        storeNewCharacter()
        setFormData(initialFormData)
    }

    console.log('Payload:', formData);
    // funzione/chiamata per aggiungere un nuovo personaggio
    function storeNewCharacter() {
        axios.post(`${BASE_URI}/characters`, formData)
            .then(res => {
                console.log('Response from API:', res.data); // Log dettagliato
                fetchList()
                setFormData(initialFormData)
            })
            .catch(err => console.error(err))
    }

    // SEARCH BAR
    // stato per la ricerca
    const [search, setSearch] = useState('')

    // funzione submit di ricerca
    function onSearch(e) {
        e.preventDefault()
        console.log('Search:', search);
        fetchList()
        fetchTeams()
        setSearch('')
    }

    // funzione per gestire ricerca
    function handleSearch(e) {
        setSearch(e.target.value)
        console.log('Search value:', e.target.value)
    }

    // funzione per eliminare un personaggio
    function deleteCharacter(id) {

        axios.delete(`${BASE_URI}/characters/${id}`)
            .then(res => {
                fetchList()
            })
            .catch(err => {
                console.error('Error deleting character:', err)
            })
    }

    // passo le funzioni e stati tramite il provider
    return (
        <charactersContext.Provider value={{ deleteCharacter, search, handleSearch, onSearch, list, fetchList, fetchDetails, characterDetails, setCharacterDetails, teamsList, fetchTeams, fetchTeamDetails, teamDetails, setTeamDetails, formData, onChange, onSubmit }}>
            {children}
        </charactersContext.Provider>
    )
}

export default charactersContext