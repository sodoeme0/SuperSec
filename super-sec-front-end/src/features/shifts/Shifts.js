import { Link } from "react-router-dom";
import ShiftCard from "./ShiftCard";
import ShiftCard2 from "../../compnents/Dash/ShiftCard"
import Dummy from "../../Dummy";
import {useGetShiftsQuery} from "./shiftsApiSlice"
import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectShiftById } from './shiftsApiSlice'









const Shifts = () => {

let content
    const {
        data: loadedShifts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetShiftsQuery()
    
    //date state
    let xyz = new Date()
    let dates = []


    const [date, setDate] = useState((xyz).toDateString())
    const [loadedCards, setCards] = useState("null")


    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
        console.log(error.data.message)
    }

    if(isSuccess){
    
        const {ids} = loadedShifts
        let temp = ids.map(shiftId => <ShiftCard2 shiftId={shiftId} date={xyz} />)
        console.log(temp)
        console.log(<ShiftCard2 shiftId={"shiftId"} date={"i"} />)
    //change displayed date and shift card function
    const changeDate = (i) => {
        setDate(i.toDateString())
       
       
        temp = ids.map(shiftId => <ShiftCard2 shiftId={shiftId} date={i} />)
        setCards(temp)

       /*if (tempCards.length == 0) {

            tempCards.push("no shifts found")
        }

        setCards(tempCards)*/
        console.log(loadedCards)

    }
    
    function isDateSelected(loadedCards){
        if(loadedCards == null){
            return temp
        }
        else{
            return loadedCards
        }
    }
   


    //populate drop down buttons
    var i = 0
    for (i; i < 30; i++) {
        var nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + (i))
        dates.push(<Link to="" onClick={changeDate.bind(this, nextDay)} className="dropdown-item" href="#">{nextDay.toDateString()}</Link>)
    }



     content = (
        <div className="container-fluid">

            <div className="row ">
                <div className="col-12 text-center p-5">

                    <div className="btn-group">
                        <button type="button" className="btn btn-dark">{date}</button>
                        <button type="button" className="btn btn-dark dropdown-toggle " data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Select Date</span>
                        </button>
                        <div className="dropdown-menu scrollable-menu" x-placement="bottom-start" /*style="position: absolute; transform: translate3d(78px, 38px, 0px); top: 0px; left: 0px; will-change: transform;"*/>

                            {dates}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-5">
            {isDateSelected()}
            {loadedCards}
            </div>



        </div>

    )

    }
 




else{
    //console.log("love")
     content = (<><p>Error</p></>)
}
return content
    
}

export default Shifts