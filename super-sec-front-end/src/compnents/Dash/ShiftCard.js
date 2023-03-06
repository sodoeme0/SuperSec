import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectShiftById } from "../../features/shifts/shiftsApiSlice"
import { selectShiftTemplateById } from '../../features/shiftTemplates/shiftTemplatesApiSlice'
import { selectPersonalById } from '../../features/personal/personalApiSlice'
import { useGetPersonalQuery } from '../../features/personal/personalApiSlice'
import { useGetShiftTemplatesQuery } from '../../features/shiftTemplates/shiftTemplatesApiSlice'

const ShiftCard = (props) => {
    let shiftId = props.shiftId
    const shift = useSelector(state => selectShiftById(state, shiftId))
    let shiftName, location, active, assignedTo ="N/A"
    let i = props.date

   
    console.log(i)
    let start = new Date(shift.start)
    let end = new Date(shift.end)
    if (shift && start.getFullYear() === i.getFullYear() && start.getMonth() === i.getMonth() && start.getDate() === i.getDate()){
        let shiftTemplate = shift.shiftTemplate
        let personal = shift.personal
        if(shift.active==0){
            active ="Shift not active"
        }
        else{
            active="Shift is active"
        }
       



  return (
    <div class="col-md-4">
    <div class="card shadow-sm border-0 mb-3">
        <div class="card-header text-bg-dark text-center">{shift.template.name}</div>
        <table class="table table-sm small table-bordered table align-middle mb-0">
           
            <tr>
                <td>Start Time:</td>
                <td>{start.toLocaleTimeString()}</td>
                
            </tr>
            
            <tr>
                <td>End Time:</td>
                <td>{end.toLocaleTimeString()}</td>
                
            </tr>
            <tr>
                <td>Location:</td>
                <td>{shift.template.location.street}, {shift.template.location.city}, {shift.template.location.state}, {shift.template.location.zip}  </td>
                
            </tr>
            <tr>
                <td>Assigned To:</td>
                <td>{shift.personal.name}</td>
                
            </tr>
            <tr>
                <td>Status:</td>
                <td>{active}</td>
                
            </tr>
            
                
        </table>
    </div>
</div>
  )
    }

    else return null
}

export default ShiftCard