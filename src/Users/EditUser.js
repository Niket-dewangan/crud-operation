import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate();

    const {id} = useParams()
    // console.log('params',id)
    const [addUser,setAddUser] = useState({
        fname:"",
        lname:"",
        email:""
    })

    useEffect(()=>{
        loadUser()

    },[])

    const {fname,lname,email}=addUser;

    const onInputChange = (e) => {
        setAddUser({...addUser,[e.target.name]:e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/users/${id}`,addUser)
        navigate("/")
    };


    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/users/${id}`)
        console.log(result)
        setAddUser(result.data)
    }

  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 rounded p-4 mt-2 shadow'>
                    <h2>Edit User</h2>
                    <form onSubmit={(e)=> onSubmit(e)} >

                    <div className='mb-3'>
                        <label htmlFor="Name" className='form-label'>
                            Name
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
                            Username
                        </label>
                        <input 
                            type="text"
                            className='form-control'
                            placeholder="Enter Your Username"
                            name="lname"
                            value={lname}
                            onChange={(e)=>onInputChange(e)}

                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Username" className='form-label'>
                            Email
                        </label>
                        <input 
                            type="text"
                            className='form-control'
                            placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={(e)=>onInputChange(e)}

                        />
                    </div>
                    <div>
                        <button type="submit" className='btn btn-outline-primary'>Submit</button>
                        <Link to="/" className='btn btn-outline-danger mx-2'>Canel</Link>

                    </div>
                    </form>

                </div>
            </div>
        </div>
    </>
  ) 
}
