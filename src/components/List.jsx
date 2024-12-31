import { Link } from "react-router-dom"
import { useContext } from "react"
import charactersContext from "../contexts/character"

export default function List() {
    const { list } = useContext(charactersContext)

    return (
        <section>
            <ul className="text-white list-group">
                {
                    list.map((character) => (
                        <li key={character.id} className="list-group-item">
                            <Link to={`/characters/${character.id}`}>{character.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}