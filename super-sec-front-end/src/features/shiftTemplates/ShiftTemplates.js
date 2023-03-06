import { Link } from "react-router-dom";
import ShiftTemplateModals from "./ShiftTemplateModals";
import React from 'react'

const ShiftTemplates = () => {
    const content = (

        <div className="row">
            <div class="col-6 p-5">
                <div class="card shadow-sm border-0 mb-3">

                    <table class="table table-sm small table-bordered table align-middle mb-0">
                        <tr class="table-secondary">
                            <th>Name</th>
                            <th>Location</th>

                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                       
                        <tr>
                            <td>Harbor House</td>
                            <td>1234 westing house blvd</td>

                            <td>
                                <div class="d-grid">
                                    <a href="#" class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#job_edit">Edit</a>
                                </div>
                            </td>

                            <td>
                                <div class="d-grid">
                                    <a href="#" class="btn btn-sm btn-warning" data-bs-toggle="modal"
                                        data-bs-target="#job_specifics">View Specifics</a>
                                </div>
                            </td>

                            <td>
                                <div class="d-grid">
                                    <a href="#" class="btn btn-sm btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#job_delete">Delete</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="col-6 p-5">
                <div class="col-md-12 offset-md-3">
                    <form action="#" class="">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-8">
                                        <label for="name">Name:</label>
                                        <input type="text" class="form-control flex" id="name" placeholder="Enter name"
                                            name="name" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-8">
                                        <label for="location">Location:</label>
                                        <input type="text" class="form-control" id="pwd" placeholder="Enter location"
                                            name="location" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-8">

                                        <label for="specifics">Shift Specifics</label>
                                        <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="6"
                                            placeholder="Write something here..."></textarea>

                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-8">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Armed
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Unarmed
                                            </label>
                                        </div>


                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <button type="submit" class="btn btn-default ">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </form>
                </div>
            </div>


          <ShiftTemplateModals/>
       
        </div >
    )

    return content
}

export default ShiftTemplates