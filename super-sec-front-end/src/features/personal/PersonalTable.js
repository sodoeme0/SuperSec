import React from 'react'

const PersonalTable = (props) => {
  const content =(
    <>
    <tr>
    <td>{props.name}</td>
    <td>{props.id}</td>
    <td>{props.armed}</td>
    <td>{props.phone}</td>
    <td>{props.email}</td>
    <td>
        <div className="d-grid">
            <a href="#" className="btn btn-sm btn-secondary" data-bs-toggle="modal"
                data-bs-target="#employee_edit">Edit</a>
        </div>
    </td>
    <td>
        <div className="d-grid">
            <a href="#" className="btn btn-sm btn-secondary" data-bs-toggle="modal"
                data-bs-target="#employee_active">Deactivate</a>
        </div>
    </td>
    <td>
        <div className="d-grid">
            <a href="#" className="btn btn-sm btn-secondary" data-bs-toggle="modal"
                data-bs-target="#employee_assign">Assign</a>
        </div>
    </td>
    <td>
        <div className="d-grid">
            <a href="#" className="btn btn-sm btn-danger" data-bs-toggle="modal"
                data-bs-target="#employee_delete">Delete</a>
        </div>
    </td>
    </tr>
    </>
  )

  return  content
}

export default PersonalTable