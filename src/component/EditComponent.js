import React from "react";
import {ListComponent} from "./ListComponent";
function EditComponent(editStudent){
    const handleCloseEdit =()=>{
        
    }
    return(
        <>
            <div className="modal show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Student</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">ID:</label>
                            <input placeholder={editStudent.id} type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Name:</label>
                            <input placeholder={editStudent.name} type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Phone:</label>
                            <input placeholder={editStudent.phone} type="text" class="form-control" id="recipient-name"/>
                        </div>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">Email:</label>
                            <input placeholder={editStudent.email} type="text" class="form-control" id="recipient-name"/>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button onClick={handleCloseEdit} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default EditComponent;