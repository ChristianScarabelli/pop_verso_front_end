import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import charactersContext from "../contexts/character";
import PageLoader from "../components/PageLoader";

export default function Default() {

    const { isLoading } = useContext(charactersContext)
    return (
        <div>
            <Header />
            <Outlet />
            {isLoading && <PageLoader />}
        </div>
    )
}