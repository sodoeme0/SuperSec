import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectShiftById } from './shiftsApiSlice'
import { selectShiftTemplateById } from '../shiftTemplates/shiftTemplatesApiSlice'

const ShiftCard = ({ date, shiftId }) => {
    const shift = useSelector(state => selectShiftById(state, shiftId))
    console.log("here")

    const navigate = useNavigate()
   let isDate = new Date(date)
    if (shift) {

        let tempCards = []

       //populate initial cards
   /* data.forEach(element => {
        if (element.start.getFullYear() === xyz.getFullYear() && element.start.getMonth() === xyz.getMonth() && element.start.getDate() === xyz.getDate()) {
            let temp = <ShiftCard name="ssssss" start={element.start.toDateString()} end={element.end} personal={element.personal} status="true" location="1424 hkasjhashjashj" />
            tempCards.push(temp)
        }
    });*/

    return(
        <div class="col-md-4">
        <div class="card shadow-sm border-0 mb-3">
            <div class="card-header text-bg-dark text-center">{shift.name}</div>
            <table class="table table-sm small table-bordered table align-middle mb-0">
               
                <tr>
                    <td>Start Time:</td>
                    <td>{shift.start}</td>
                    
                </tr>
                
                <tr>
                    <td>End Time:</td>
                    <td>{shift.end}</td>
                    
                </tr>
                <tr>
                    <td>Location:</td>
                    <td>{shift.location}</td>
                    
                </tr>
                <tr>
                    <td>Assigned To:</td>
                    <td>{shift.personal}</td>
                    
                </tr>
                <tr>
                    <td>Status:</td>
                    <td>{shift.status}</td>
                    
                </tr>
                
                    
            </table>
        </div>
    </div>
        )
       

    } else return null
}
export default ShiftCard