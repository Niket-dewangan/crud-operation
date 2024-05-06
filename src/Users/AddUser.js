import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function AddUser() {

    let navigate = useNavigate();


    const [addUser,setAddUser] = useState({
        fname:"",
        lname:"",
        email:"",
        gender:"",
        dob:""
    })

    const {fname,lname,email,gender,dob}=addUser;

    const onInputChange = (e) => {
        


        setAddUser({...addUser,[e.target.name]:e.target.value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(e)
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        await axios.post("https://5c78-2405-201-3020-6809-157f-d545-737c-fb76.ngrok-free.app/student",addUser)
        navigate("/")
    };

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 rounded p-4 mt-2 shadow'>
                    <h2>Register User</h2>
                    <form onSubmit={(e)=> onSubmit(e)} >

                    <div className='mb-3'>
                        <label htmlFor="Name" className='form-label'>
                          First  Name
                        </label>
                        <input 
                            type="text"
                            className='form-control'
                            placeholder="Enter Your Name"
                            name="fname"
                            value={fname}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor="Username" className='form-label'>
                            Last Name
                        </label>
                        <input 
                            type="text"
                            className='form-control'
                            placeholder="Enter Your Last Name"
                            name="lname"
                            value={lname}
                            onChange={(e)=>onInputChange(e)}

                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Email" className='form-label'>
                            Email
                        </label>
                        <input 
                            type="email"
                            className='form-control'
                            placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="gender" className='form-label'>
                            Gender
                        </label>
                        <input 
                            
                            className='form-control'
                            placeholder="Enter Your Gender"
                            name="gender"
                            value={gender}
                            onChange={(e)=>onInputChange(e)}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="dob" className='form-label'>
                            Date of Birth
                        </label>
                        <input 
                            type="date"
                            className='form-control'
                            placeholder="Enter Your Email"
                            name="dob"
                            value={dob}
                            onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div>
                        <button type="submit" className='btn btn-outline-primary'>Submit</button>
                        <Link to="/"className='btn btn-outline-danger mx-2'>Canel</Link>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    </>
  ) 
}
