import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import './style.css'
import Navigation from './Navigation';


export const LogInForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const [users, setUsers] = useState([])

    const [btnDisabled, setBtnDisabled] = useState('')

    const formSchema = yup.object().shape({
        username: yup
        .string()
        .trim()
        .required('The username is a required field.'),
        password: yup
        .string()
        .trim()
        .required('The password field is required.')
        .min(8, 'Password must be at least 8 characters long.')
        .max(20, 'The password character limit is 20.'),
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
        axios
        .post('https://reqres.in/api/users', formState)
        .then(res => {
            setUsers({ ...setUsers, [users]: res.data })
            console.log('SUCCESS!', users)
            setFormState({
                username: '',
                password: '',
            })
        })
        .catch(err => {
            console.log(err.response);
        })
    }

    return (
        <div>
            <div className='login'>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>
                    Username:&nbsp;
                    <input 
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Type your username here.'
                    value={formState.name}
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
                    <p> {errors.name} </p>
                    <p> {errors.password} </p>
                    <div>
                        <button disabled={btnDisabled} type='submit' data-cy='button'>
                            Log in
                        </button>
                    </div>
                    <div>
                        <pre> {JSON.stringify(users)} </pre>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default LogInForm;