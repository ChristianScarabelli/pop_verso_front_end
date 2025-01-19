import { Link } from "react-router-dom"
import { TrashIcon } from "@heroicons/react/16/solid"
import { useContext } from "react"
import charactersContext from "../contexts/character"

export default function List({ data = [], basePath }) {

    const { deleteCharacter } = useContext(charactersContext)
    return (
        <section>

            <ul className="container text-white list-group">
                {
                    data &&
                    data.map((item) => (
                        <li key={item.id} className="list-group-item d-flex align-items-center justify-content-between bg-secondary-subtle">
                            {/* link dinamico con props basePath a cui corrisponderà lo useLocation() con la lista dei dati (team o character) */}
                            <Link style={{ textDecoration: 'none' }} className="text-body-secondary" to={`/${basePath}/${item.id}`}>{item.name}</Link>
                            <button onClick={() => deleteCharacter(item.id)} className="btn btn-danger btn-sm ">
                                <TrashIcon style={{ width: '18px', height: '18px' }} />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

