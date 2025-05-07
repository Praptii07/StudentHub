import { useState } from 'react';

export default function StudentForm({ onAdd }) {
    const [form, setForm] = useState({ name: '', email: '', course: '' });
    const [showModal, setShowModal] = useState(false); // State to toggle the modal visibility

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!form.name || !form.email || !form.course) {
            return alert('All fields are required');
        }
        if (!/\S+@\S+\.\S+/.test(form.email)) {
            return alert('Invalid email');
        }
        onAdd(form);
        setForm({ name: '', email: '', course: '' });
        setShowModal(false); // Close the modal after form submission
    };

    return (
        <div>
            <button
                className="btn btn-success w-100 mb-3"
                onClick={() => setShowModal(true)} // Open the modal when clicked
            >
                Add Student
            </button>

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="studentFormModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="studentFormModalLabel">Add Student</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="course"
                                        value={form.course}
                                        onChange={handleChange}
                                        placeholder="Course"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Add Student
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
        </div>
    );
}
