import List from '../components/List.jsx'
import Teams from '../components/Teams.jsx'

export default function Index() {
    return (
        <main className='bg-dark py-3 vh-100'>
            <div className="container">
                <h2 className='text-white text-center my-2'>Personaggi del Pop Verso</h2>
                <List />
            </div>
            <section>
                <div className="container">
                    <h2 className='text-white text-center my-2'>Teams del Pop Verso</h2>
                    <Teams />
                </div>
            </section>
        </main>
    )
}