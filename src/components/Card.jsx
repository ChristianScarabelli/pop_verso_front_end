export default function Card({ data }) {
    return (
        <section>
            <div className="card p-3">
                {data.name && <span className="card-title display-4"><strong>Name:</strong> {data.name}</span>}
                {data.age && <span className="card-subtitle"><strong>Age:</strong> {data.age}</span>}
                {data.shadow && <span className="card-subtitle"><strong>Shadow agent:</strong> {data.shadow}</span>}
                {data.description && <p className="card-text"><strong>Description:</strong> {data.description}</p>}
            </div>
        </section>
    )
}