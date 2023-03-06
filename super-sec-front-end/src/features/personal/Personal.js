import { Link } from "react-router-dom";
import PersonalTable from "./PersonalTable";
import PersonalModals from "./PersonalModals";
import React, {useState} from 'react'


const json =[
    {
        "_id": "63bd816a988836048e6b8817",
        "name": "success Odoemena",
        "armed": 0,
        "phone": "9804999009",
        "email": "sucyboy@gmail.com",
        "__v": 0
    },
    {
        "_id": "63bd816a988836048e6b8817",
        "name": "success Odoemena",
        "armed": 0,
        "phone": "9804999009",
        "email": "sucyboy@gmail.com",
        "__v": 0
    },
    {
        "_id": "63bd816a988836048e6b8817",
        "name": "success Odoemena",
        "armed": 0,
        "phone": "9804999009",
        "email": "sucyboy@gmail.com",
        "__v": 0
    },
    {
        "_id": "63bd816a988836048e6b8817",
        "name": "success Odoemena",
        "armed": 0,
        "phone": "9804999009",
        "email": "sucyboy@gmail.com",
        "__v": 0
    }
]


const Personal = () => {


    //populate table 
let data = []
json.forEach(element =>{
    let temp = <PersonalTable name={element.name} id={element._id} armed={element.armed} phone={element.phone} email={element.email}/>
    data.push(temp)
})
const [personals, setPersonals] = useState(data)

    const content = (
        <>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row p-5">
                            <div className="col-12">
                                <div className="card shadow-sm border-0 mb-3">

                                    <table className="table table-sm small table-bordered table align-middle mb-0">
                                        <tr className="table-secondary">
                                            <th>Name</th>
                                            <th>ID</th>
                                            <th>Armed/Unarmed</th>
                                            <th>Cell</th>
                                            <th>Email</th>
                                            <th>Edit</th>
                                            <th>Deactivate/Activate</th>
                                            <th>Assign Shift</th>
                                            <th>Delete</th>
                                        </tr>
                                        
                                          {personals}
                                        


                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row p-5">
                            <div className="col-3">

                                <div className="d-grid">
                                    <a href="#" className="btn btn-sm btn-success" data-bs-toggle="modal"
                                        data-bs-target="#employee_add">Add new personal</a>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


    <PersonalModals/>
    
        </>
    )

    return content
}

export default Personal