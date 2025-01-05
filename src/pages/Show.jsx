import Card from "../components/Card"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import charactersContext from "../contexts/character"

export default function Show() {

    // recupero l'id
    const { id } = useParams()

    // determino il tipo di rotta corrente
    const { pathname } = useLocation()

    const { fetchDetails, characterDetails, setCharacterDetails, setTeamDetails, teamDetails, fetchTeamDetails } = useContext(charactersContext)

    const navigate = useNavigate()

    // faccio il fetch dei dati in base alla rotta
    useEffect(() => {
        if (pathname.includes('characters')) {
            setTeamDetails({}); // Reset team details
            fetchDetails(id);
        } else if (pathname.includes('teams')) {
            setCharacterDetails({}); // Reset character details
            fetchTeamDetails(id);
        }
    }, [id, pathname]);


    const data = pathname.includes('characters') ? characterDetails : teamDetails

    return (
        <section className="bg-dark vh-100 py-4">
            <div className="container">
                <h2 className="text-center text-white">Skills card</h2>
                <div className="d-flex pb-3">
                    <button onClick={() => navigate(-1)} className="btn btn-light btn-sm">Go back</button>
                </div>
                <Card data={data} />
            </div>
        </section>
    )
}