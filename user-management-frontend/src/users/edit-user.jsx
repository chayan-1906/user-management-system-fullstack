import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {baseURL} from "../constants.jsx";

export default function EditUser() {

    let navigate = useNavigate()
    const {id} = useParams()

    const [user, setUser] = useState({
        name: '',
        userName: '',
        email: ''
    })

    const {name, userName, email} = user

    const onInputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault()
        await axios.put(baseURL + `/user?userId=${id}`, user)
        navigate('/')
    }

    const loadUser = async () => {
        const url = baseURL + `/user?userId=${id}`
        console.log(url)
        const result = await axios.get(url)
        setUser(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit User</h2>
                    <form onSubmit={(event) => onSubmit(event)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>Name</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your name'
                                name='name'
                                value={name}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='UserName' className='form-label'>UserName</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your username'
                                name='userName'
                                value={userName}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>Email</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your email address'
                                name='email'
                                value={email}
                                onChange={(event) => onInputChange(event)}
                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
