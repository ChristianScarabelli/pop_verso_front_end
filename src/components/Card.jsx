export default function Card({ data }) {
    return (
        <section>
            <div className="card p-3">
                {data.name && <h1 className="card-title">Name: {data.name}</h1>}
                {data.age && <span className="card-subtitle">Age: {data.age}</span>}
                {data.shadow && <span className="card-subtitle">Shadow agent: {data.shadow}</span>}
                {data.description && <p className="card-text">Description: {data.description}</p>}
            </div>
        </section>
    )
}