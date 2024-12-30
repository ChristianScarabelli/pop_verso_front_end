import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="bg-dark vh-100 vw-100 d-flex justify-content-center align-items-center flex-column g-3">
            <h1 className="text-white display-1">404</h1>
            <span className="text-white fs-4 mb-4">Page not found!</span>
            <Link to='/characters'>Go back to the homepage</Link>
        </main>
    )
}