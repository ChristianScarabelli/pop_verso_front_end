import List from '../components/List.jsx'
import { useContext } from 'react'
import charactersContext from "../contexts/character"

export default function Index() {

    const { list, teamsList } = useContext(charactersContext)

    return (
        <main className='bg-dark py-3 vh-100'>
            <div className="container">
                <h2 className='text-white text-center my-2'>Personaggi del Pop Verso</h2>
                <List data={list} basePath='characters' />
            </div>
            <section>
                <div className="container">
                    <h2 className='text-white text-center my-2'>Teams del Pop Verso</h2>
                    <List data={teamsList} basePath='teams' />
                </div>
            </section>
        </main>
    )
}