import List from '../components/List.jsx'
import { useContext } from 'react'
import charactersContext from "../contexts/character"

export default function Index() {

    const { toggleElement, isShown, handleSearch, search, onSearch, list, teamsList, formData, onChange, onSubmit } = useContext(charactersContext)

    return (
        <main className='bg-dark py-3 min-height-100vh'>
            <div className="container">
                <h2 className='text-white text-center my-3'>Personaggi del Pop Verso</h2>
                <div className='mt-5 mb-3 d-flex align-items-center justify-content-between'>
                    {isShown ? (
                        <button onClick={toggleElement} style={{ aspectRatio: '1/1' }} className='d-flex align-items-center justify-content-center btn btn-primary fs-2'>-</button>

                    ) : (
                        <button onClick={toggleElement} style={{ aspectRatio: '1/1' }} className='d-flex align-items-center justify-content-center btn btn-primary fs-2'>+</button>

                    )
                    }

                    <form onSubmit={onSearch}>
                        <input type="text" value={search} onChange={handleSearch} name='search' className="form-control" id="search" placeholder="Cerca personaggi..." />
                    </form>
                </div>
                {/* Form */}
                <section className={isShown ? 'd-block my-5 animate__animated animate__bounceInDown animate__faster' : 'd-none animate__animated animate__bounceOutUp'}>
                    <div className="container mt-5">
                        <h2 className='text-center text-white mt-3 '>Aggiungi un nuovo personaggio</h2>
                        <form onSubmit={onSubmit} className='row g-1'>
                            <div className="col-12">
                                <label htmlFor="name" className="form-label text-white">Nome</label>
                                <input type="text" value={formData.name} onChange={onChange} name='name' className="form-control" id="name" placeholder="Inserisci nome e cognome..." required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="description" className="form-label text-white">Descrizione</label>
                                <textarea className="form-control" value={formData.description} onChange={onChange} name='description' id="description" placeholder="Descrivi il personaggio..." required></textarea>
                            </div>
                            <div className="col-6">
                                <label htmlFor="age" className="form-label text-white">Age</label>
                                <input type="number" name='age' value={formData.age} onChange={onChange} className="form-control" id="age" required />
                            </div>
                            <div className="col-6">
                                <label htmlFor="shadow" className="form-label text-white">Shadow</label>
                                <select id="shadow" name='shadow' value={formData.shadow} onChange={onChange} className="form-select" required >
                                    <option defaultValue>Choose...</option>
                                    <option value={0}>Yes</option>
                                    <option value={1}>No</option>
                                </select>
                            </div>
                            <div className="col-12 d-flex justify-content-end mt-4">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </section >
                {list.length > 0 ? (
                    <List data={list} basePath='characters' />
                ) : (<div className='text-center my-5'>
                    <span className='text-light'>No character found...</span>
                </div>)
                }
            </div>
            <section className='py-4'>
                <div className="container">
                    <h2 className='text-white text-center my-3'>Teams del Pop Verso</h2>
                    <List data={teamsList} basePath='teams' />
                </div>
            </section>
        </main >
    )
}