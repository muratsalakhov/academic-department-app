import React from 'react'

function StudentItem({student}) {
    return (
        <tr>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.surname}</td>
            <td>{student.secondName}</td>
            <td>{student.studyGroupId}</td>
        </tr>
    )
}

export default StudentItem