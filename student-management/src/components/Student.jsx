// src/components/Student.js

import React from 'react';

const Student = ({ student, number }) => {
    return (
        <tr>
            <td>{number}</td>
            <td>{student.name}</td>
            <td>{student.department}</td>
            <td>{student.status === 'Pass' ? student.finalGrade : '-'}</td>
            <td>{student.status}</td>
        </tr>
    );
};

export default Student;
