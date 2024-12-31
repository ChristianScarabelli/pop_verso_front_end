import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import charactersContext from "../contexts/character"

export default function Card() {

    // recupero l'id
    const { id } = useParams()
    // console.log(id)
    const { fetchDetails, characterDetails } = useContext(charactersContext)

    // al cambio dell'id selezionato, faccio il fetch con l'id della req
    useEffect(() => {
        fetchDetails(id)
    }, [id])

    console.log(characterDetails)

    return (
        <section>
            <div className="card p-3">
                <h1>Name: {characterDetails.name}</h1>
                <span>Age: {characterDetails.age}</span>
                <span>Shadow: {characterDetails.shadow}</span>
                <p>Description: {characterDetails.description}</p>
            </div>
        </section>
    )
}