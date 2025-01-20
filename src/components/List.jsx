import { Link } from "react-router-dom"
import { TrashIcon } from "@heroicons/react/16/solid"
import { useContext } from "react"
import charactersContext from "../contexts/character"

export default function List({ data = [], basePath }) {

    const { handleHover, inHover, deleteCharacter } = useContext(charactersContext)

    return (
        <section>
            <ul className="container text-secondary list-group">
                {
                    data &&
                    data.map((item) => (
                        <li onMouseLeave={() => handleHover(item.id, false)} onMouseEnter={() => handleHover(item.id, true)} key={item.id} style={{ height: '50px' }} className="list-group-item d-flex align-items-center justify-content-between bg-secondary-subtle">
                            {/* link dinamico con props basePath a cui corrisponderà lo useLocation() con la lista dei dati (team o character) */}
                            <Link style={{ textDecoration: 'none' }} className="text-body-secondary" to={`/${basePath}/${item.id}`}>{item.name}</Link>
                            {inHover === item.id && (
                                <button onClick={() => deleteCharacter(item.id)} className="btn btn-danger btn-sm animate__animated animate__bounceIn animate__faster">
                                    <TrashIcon style={{ width: '18px', height: '18px' }} />
                                </button>
                            )}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

