


import React from 'react'

const ShiftTemplateModals = () => {
  const content = (
    <>
    
      <div class="modal fade" id="job_delete" data-bs-backdrop="static" tabindex="-1" aria-hidden="true"
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


    <div class="modal fade" id="job_specifics" data-bs-backdrop="static" tabindex="-1" aria-hidden="true"
       /* style="backdrop-filter: blur(5px);"*/>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center d-flex justify-content-between align-items-center p-3">
                    <p>skaopkao maosm paoms aoms paom spaosm pmaso mapos maposm poasmpoams poamspomas mapsom poasm poasm pomas pomas omas omas
                         aso kapsk oask poaks oaks pokaspok oaskpaoskp oakspo kaopk poak poak poak opkasopk poaskokaspokpoaksokaspok aposk poakspo kaposk apos 
                         ka oks paosk paosk
                    </p>
                    <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="submit" class="btn btn-sm btn-warning" data-bs-dismiss="modal"
                        aria-label="Close">Close</button>
                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="job_edit" data-bs-backdrop="static" tabindex="-1" aria-hidden="true"
        /*style="backdrop-filter: blur(5px);"*/>
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-bg-dark">
                    <h5 class="modal-title">Edit Template</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="container">
                            <div class="row gx-3">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="email">Name:</label>
                                        <input type="email" class="form-control flex" id="email"
                                            placeholder="Enter Name" name="name"/>
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
                                        <label for="email">Location:</label>
                                        <input type="phone" class="form-control flex" id="phone"
                                            placeholder="Enter Location" name="location"/>
                                    </div>
                                </div>

                                <div class="col-md-10">
                                    <div class="d-grid">
                                        <label for="email">Specifics:</label>
                                        <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="6"
                                            placeholder="Write something here..."></textarea>
                                    </div>
                                </div>
                            
                                <div class="col-md-10">
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-sm btn-success">Update Template</button>
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


    </>
  )
  return content
}

export default ShiftTemplateModals