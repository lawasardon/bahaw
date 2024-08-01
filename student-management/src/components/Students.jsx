
import React from 'react';
import Student from './Student'; // Assuming Student component will be created separately

const Students = ({ students }) => {
    return (
        <div>
            <h2>List of Students</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Student Name</th>
                        <th>Department</th>
                        <th>Final Grade</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <Student key={index} student={student} number={index + 1} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Students;
