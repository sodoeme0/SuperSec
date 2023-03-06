import React from 'react'

const PersonalModals = () => {
  const content = (
    <>
    <div class="modal fade" id="employee_edit" data-bs-backdrop="static" tabindex="-1" aria-hidden="true"
        /*style="backdrop-filter: blur(5px);"*/>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-bg-dark">
                    <h5 class="modal-title">Edit Employee</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="row gx-3">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="email">Email:</label>
                                        <input type="email" class="form-control flex" id="email"
                                            placeholder="Enter email" name="email"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Armed
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault2" checked/>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Unarmed
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="d-grid">
                                        <label for="email">Cell:</label>
                                        <input type="phone" class="form-control flex" id="phone"
                                            placeholder="Enter cell" name="phone"/>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="d-grid">
                                        <label for="email">Name:</label>
                                        <input type="name" class="form-control flex" id="name" placeholder="Enter name"
                                            name="name"/>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-sm btn-success">Update Employee</button>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-sm btn-warning" data-bs-dismiss="modal"
                                            aria-label="Close">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="employee_add" data-bs-backdrop="static" tabindex="-1" aria-hidden="true"
       /*style="backdrop-filter: blur(5px);"*/>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-bg-dark">
                    <h5 class="modal-title">Edit Employee</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="row gx-3">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="email">Email:</label>
                                        <input type="email" class="form-control flex" id="email"
                                            placeholder="Enter email" name="email"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1"/>
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Armed
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault2" checked/>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Unarmed
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="d-grid">
                                        <label for="email">Cell:</label>
                                        <input type="phone" class="form-control flex" id="phone"
                                            placeholder="Enter cell" name="phone"/>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="d-grid">
                                        <label for="email">Name:</label>
                                        <input type="name" class="form-control flex" id="name" placeholder="Enter name"
                                            name="name"/>
                                    </div>
                                </div>
                                <div class="col-md-10">
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-sm btn-success">Add Employee</button>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-sm btn-warning" data-bs-dismiss="modal"
                                            aria-label="Close">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="employee_delete" data-bs-backdrop="static" tabindex="-1" aria-hidden="true"
       /* style="backdrop-filter: blur(5px);"*/>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center d-flex justify-content-between align-items-center p-3">
                    <h4 class="fw-light m-0">Do you want to delete the Employee <strong><q>Graphic Designer</q></strong>
                        ?</h4>
                    <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="submit" class="btn btn-sm btn-danger">YES!</button>
                    <button type="submit" class="btn btn-sm btn-warning" data-bs-dismiss="modal"
                        aria-label="Close">Nope, Go back</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="employee_active" data-bs-backdrop="static" tabindex="-1" aria-hidden="true"
       /* style="backdrop-filter: blur(5px);"*/>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center d-flex justify-content-between align-items-center p-3">
                    <h4 class="fw-light m-0">Do you want to Deactivate the Employee <strong><q>Graphic
                                Designer</q></strong> ?</h4>
                    <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="submit" class="btn btn-sm btn-danger">YES!</button>
                    <button type="submit" class="btn btn-sm btn-warning" data-bs-dismiss="modal"
                        aria-label="Close">Nope, Go back</button>
                </div>
            </div>
        </div>
    </div>


            <div className="modal fade" id="employee_assign" data-bs-backdrop="static" tabindex="-1" aria-hidden="true"
                /*style="backdrop-filter: blur(5px);"*/>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header text-bg-dark">
                            <h5 className="modal-title">Assign Shift</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="container">
                                    <div className="row gx-3">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <div className="col-12 ">

                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-dark">Harbor House</button>
                                                        <button type="button"
                                                            className="btn btn-dark dropdown-toggle dropdown-toggle-split"
                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className="sr-only">Select Shift</span>
                                                        </button>
                                                        <div className="dropdown-menu " x-placement="bottom-start"
                                                            /*style="position: absolute; transform: translate3d(78px, 38px, 0px); top: 0px; left: 0px; will-change: transform;"*/>
                                                            <a className="dropdown-item" href="#">Action</a>
                                                            <a className="dropdown-item" href="#">Another action</a>
                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="#">Separated link</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="d-grid">
                                                <label htmlFor="date">Date:</label>
                                                <input type="date" className="form-control form-control-sm" name="date"
                                                    value="2022-07-19" required />
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="d-grid">
                                                <label htmlFor="email">Start Time:</label>
                                                <input type="text" className="form-control flex" id="phone"
                                                    placeholder="Enter start" name="start" />
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="d-grid">
                                                <label htmlFor="email">End time:</label>
                                                <input type="text" className="form-control flex" id="end" placeholder="Enter edn"
                                                    name="end" />
                                            </div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-sm btn-success">Assign</button>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="d-grid">
                                                <button type="submit" className="btn btn-sm btn-warning" data-bs-dismiss="modal"
                                                    aria-label="Close">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
  )

  return content
}

export default PersonalModals