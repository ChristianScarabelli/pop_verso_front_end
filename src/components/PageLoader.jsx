export default function PageLoader() {
    return (
        <section style={{ backgroundColor: 'rgba(1,1,1,0.3)' }} className=" vh-100 vw-100 top-0 left-0 position-fixed d-flex align-items-center justify-content-center">
            <div style={{ height: '80px', width: '80px', borderWidth: '0.5rem' }} className="spinner-border text-info" role="status">
            </div>
        </section>
    )
}