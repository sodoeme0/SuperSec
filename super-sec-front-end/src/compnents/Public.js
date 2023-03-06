import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
  const content =(
    <div className="d-md-flex h-md-100 align-items-center">

    
        <div className="col-md-6 p-0 bg-indigo h-md-100">
            <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                <div className="logoarea pt-5 pb-5">
                    <img className="welecome-img"src="istockphoto-1223088904-612x612.jpg"/>                </div>
            </div>
        </div>
    
  
        <div className="col-md-6 p-0 bg-grey h-md-100 loginarea">
            <div className="d-md-flex align-items-center h-md-100 justify-content-center">
                <div className="col-md-12 offset-md-3">
                    <form action="#" className="">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-8">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control flex" id="email" placeholder="Enter email" name="email"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <button type="submit" className="btn btn-default ">Login</button>
                                </div>

                                <div className="col-6">
                                    <button value="Register Company" className="btn btn-default ">Register Company</button>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                      
                     
                    </form>
                </div>
            </div>
        </div>
            
    </div>
  )
  return content
}

export default Public