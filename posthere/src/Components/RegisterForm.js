import React, { useState, useEffect } from 'react';
import * as yup from 'yup';

import './style.css'
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useHistory } from "react-router-dom"

export const RegisterForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const [users, setUsers] = useState([])

    const history = useHistory();

    const [btnDisabled, setBtnDisabled] = useState('')

    const formSchema = yup.object().shape({
        name: yup
        .string()
        .trim()
        .required('The name is a required field.'),
        username: yup
        .string()
        .trim()
        .required('The username field is required.')
        .min(5, 'Username must be at least 8 characters long.')
        .max(20, 'The username character limit is 20.'),
        password: yup
        .string()
        .trim()
        .required('The password field is required.')
        .min(8, 'Password must be at least 8 characters long.')
        .max(20, 'The password character limit is 20.'),
        email: yup
        .string()
        .trim()
        .email('The email should be a valid address.')
        .required('A valid email is required.'),
        terms: yup
        .boolean()
        .oneOf([true]),
    });

    useEffect(() => {
        console.log('The form has changed.');
        formSchema.isValid(formState).then((valid) => {
            setBtnDisabled(!valid);
        });
    }, [formState]);

    function validateChange(e) {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        .then(() => {
            setErrors({...errors, [e.target.name]: '' })
        })
        .catch((err) => {
            setErrors({ ...errors, [e.target.name]: err.errors[0] })
        });
    } 

    function inputChange(e) {
        
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]: 
            e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        }
        validateChange(e);
        setFormState(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
        axiosWithAuth()
        .post('/api/auth/register', formState)
        .then(res => {
            setUsers({ ...setUsers, [users]: res.data })
            window.localStorage.setItem("token", res.data.payload)
            history.push('/login')
            console.log('SUCCESS!', users)
            console.log(res)
            setFormState({
                name: '',
                email: '',
                username: '',
                password: ''
               
            })
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    return (
        <div>
            <div className='register'>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>
                    Name:&nbsp;
                    <input 
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Type your name here.'
                    value={formState.name}
                    onChange={inputChange}
                    />
                </label>
                <label htmlFor='email'>
                    Email:&nbsp;
                    <input 
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Type your email here.'
                    value={formState.email}
                    onChange={inputChange}
                    />
                </label>
                <label htmlFor='username'>
                    Username:&nbsp;
                    <input 
                    type='username'
                    name='username'
                    id='username'
                    placeholder='Type your username here.'
                    value={formState.username}
                    onChange={inputChange}
                    />
                </label>
                <label htmlFor='password'>
                    Password:&nbsp;
                    <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Type your password here.'
                    value={formState.password}
                    onChange={inputChange}
                    />
                </label>
                <div>
                    {/* <label htmlFor='terms'>
                        <h4> Do you accept the Terms of Service (TOS) </h4>
                        <input 
                        type='checkbox'
                        name='terms'
                        id='terms'
                        checked={formState.terms}
                        onChange={inputChange}
                        />
                    </label> */}
                </div>
                <div>
                    <p> {errors.name} </p>
                    <p> {errors.email} </p>
                    <p> {errors.username} </p>
                    <p> {errors.password} </p>
                    <div>
                        <button disabled={btnDisabled} type='submit' data-cy='button'>
                            Register User
                        </button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default RegisterForm;