
export default function Spinner() {
  return (
    <div className="d-flex justify-content-center">
        <div className="spinner-border text-info sm" role="status" aria-hidden="true">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
