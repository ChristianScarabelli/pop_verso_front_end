import Card from "../components/Card"
import { useNavigate } from "react-router-dom"

export default function Show() {

    const navigate = useNavigate()

    return (
        <section className="bg-dark vh-100 py-4">
            <div className="container">
                <h2 className="text-center text-white">Skills card</h2>
                <div className="d-flex pb-3">
                    <button onClick={() => navigate(`/characters`)} className="btn btn-light btn-sm">Go back</button>
                </div>
                <Card />
            </div>
        </section>
    )
}