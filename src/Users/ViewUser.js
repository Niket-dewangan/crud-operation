import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function ViewUser() {

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
                    <h2>View User</h2>
                    

                    <div className='mb-3'>
                        <label htmlFor="Name" className='form-label'>
                            Name
                        </label><br/>
                        <text>{fname}</text>
                        
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor="Username" className='form-label'>
                            Username
                        </label><br/>
                        <text>{lname}</text>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="Username" className='form-label'>
                            Email
                        </label>
                        <text><br/>{email}</text>
                    </div>
                    <div>
                        <Link to="/" className='btn btn-outline-primary'>Go Back</Link>
                    </div>
                   

                </div>
            </div>
        </div>
    </>
  ) 
}
