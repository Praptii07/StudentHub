export default function StudentFilter({ courses, selected, onChange }) {
    return (
        <div className="mb-3">

            <select
                id="courseFilter"
                className="form-select"
                value={selected}
                onChange={e => onChange(e.target.value)}
                style={{ backgroundColor: '#d5d3d3' }}
            >
                <option value="">All Courses</option>
                {courses.map(course => (
                    <option key={course} value={course}>
                        {course}
                    </option>
                ))}
            </select>
        </div>
    );
}
