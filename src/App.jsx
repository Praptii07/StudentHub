import { useEffect, useState } from 'react';
import axios from './api/mockApi';
import StudentList from './components/StudentList';
import StudentFilter from './components/StudentFilter';
import StudentForm from './components/StudentForm';
import LoginButton from './components/LoginButton';
import './App.css';

function App() {
    const [students, setStudents] = useState([]);
    const [filter, setFilter] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/students').then(res => setStudents(res.data));
    }, []);

    const handleAddStudent = newStudent => {
        axios.post('/students', newStudent).then(res => setStudents([...students, res.data]));
    };

    const filtered = filter
        ? students.filter(s => s.course.toLowerCase() === filter.toLowerCase())
        : students;

    const courses = [...new Set(students.map(s => s.course))];

    return (
        <div
            className="app-container container py-5"
            style={{
                minHeight: '100vh', // Ensure full height
                color: '#f1f1f1', // Light text
            }}
        >
            <div className="d-flex justify-content-center mb-5">
                <h1
                    className="text-primary"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '2.8rem',
                        letterSpacing: '1px',
                        textAlign: 'center',
                        borderBottom: '4px solid ',
                        paddingBottom: '12px',
                        maxWidth: '500px',
                        width: '100%',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',

                    }}
                >
                    StudentHub
                </h1>
            </div>

            {/* Centered Card with Shadow */}
            <div
                className="card p-4"
                style={{
                    backgroundColor: '#bababa', // Dark grey card background
                    border: 'none',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
                    borderRadius: '16px',
                    color: '#f1f1f1', // Light text inside the card
                    width: '100%',
                }}
            >
                {/* Display login and student filter */}
                {!user ? (
                    <div className="text-center mb-4">
                        <p className="lead text-primary">Please log in to manage students</p>
                        <LoginButton user={user} setUser={setUser}/>
                    </div>
                ) : (
                    <>
                        <div className="mb-4">
                            {/* Full width Student Filter */}
                            <StudentFilter courses={courses} selected={filter} onChange={setFilter}/>
                        </div>

                        {/* Students List */}
                        <div className="mb-4 ">
                            <StudentList students={filtered}/>
                        </div>

                        {/* Form to add student */}
                        <div className="p-4 mt-4">
                            <StudentForm onAdd={handleAddStudent}/>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
}

export default App;
