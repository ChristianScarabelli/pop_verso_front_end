import { useContext } from "react"
import charactersContext from "../contexts/character"
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid"

export default function Header() {

    const { toggleDarkMode, isDarkMode } = useContext(charactersContext)
    return (
        <header className={`p-4 border-bottom bg-secondary-emphasis ${isDarkMode && 'bg-dark border-light'}`}>
            <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
                {isDarkMode ? (
                    <button className="align-self-end btn btn-light d-flex align-items-center justify-content-center" onClick={() => toggleDarkMode()}>
                        <SunIcon className="" style={{ color: 'black', width: '20px' }} />
                    </button>
                ) : (
                    <button className="align-self-end btn btn-secondary d-flex align-items-center justify-content-center" onClick={() => toggleDarkMode()}>
                        <MoonIcon className="" style={{ color: 'white', width: '20px' }} />
                    </button>
                )
                }
                <h1 className="text-secondary text-center display-3 text-uppercase">Pop Verso</h1>
            </div>
        </header>
    )
}