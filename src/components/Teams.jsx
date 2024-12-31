import { Link } from "react-router-dom"
import { useContext } from "react"
import charactersContext from "../contexts/character"

export default function Teams() {
    const { teamsList } = useContext(charactersContext)

    return (
        <section>
            <ul className="text-white list-group">
                {
                    teamsList.map((team) => (
                        <li key={team.id} className="list-group-item">
                            <Link to={`/teams/${team.id}`}>{team.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}