import { Link } from "react-router-dom"

export default function List({ data = [], basePath }) {

    return (
        <section>

            <ul className="container text-white list-group">
                {
                    data &&
                    data.map((item) => (
                        <li key={item.id} className="list-group-item">
                            {/* link dinamico con props basePath a cui corrisponderà lo useLocation() con la lista dei dati (team o character) */}
                            <Link to={`/${basePath}/${item.id}`}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}