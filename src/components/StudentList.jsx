export default function StudentList({ students }) {
    return (
        <div className="row">
            {students.map(s => (
                <div key={s.id} className="col-12 mb-4">
                    <div className="card h-100 shadow-sm hover-shadow"
                         style={{
                             backgroundColor: '#a6a6a6', // Dark grey card background
                             color: '#f8f6f6'
                         }}
                    >
                        <div className="card-body">
                            <h5 className="card-title">{s.name}</h5>
                            <p className="card-text">
                                <strong>Email:</strong> {s.email}
                                <br />
                                <strong>Course:</strong> {s.course}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
