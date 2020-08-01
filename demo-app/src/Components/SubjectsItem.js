import React from 'react'

function SubjectsItem({subject}) {
    return (
        <tr>
            <td>{subject.id}</td>
            <td>{subject.name}</td>
            <td>{subject.shortName}</td>
            <td>{subject.type}</td>
        </tr>
    )
}

export default SubjectsItem