import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { axiosWithAuth } from "../api/axiosWithAuth";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { login } from '../actions/loginActions'

export const LogInForm = ({user, login,isFetching,error}) => {

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

    const history = useHistory();

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

    // useEffect(() => {
    //     if(user){
    //         const {}
    //     }
    //     console.log('The form has changed.');
    //     formSchema.isValid(formState).then((valid) => {
    //         setBtnDisabled(!valid);
    //     });
    // }, [formState]);
    useEffect(() => {
        if (user) {
           const { username, password } = user
           setFormState({
              username: username,
              password: password
           })
        }
     }, [user])
  

    function validateChange(e) {
        yup.reach(formSchema, e.target.name).validate(e.target.value)
        .then(() => {
            setErrors({...errors, [e.target.name]: '' })
        })
        .catch((err) => {
            setErrors({ ...errors, [e.target.name]: err.errors[0] })
        });
    } 

    // function inputChange(e) {
    //     e.persist();
    //     const newFormData = {
    //         ...formState,
    //         [e.target.name]: 
    //         e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    //     }
    //     validateChange(e);
    //     setFormState(newFormData);
    // }
    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
     }
  

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //     .post('https://posthere-subreddit-app.herokuapp.com/api/auth/login', formState)
    //     .then(res => {
    //         setUsers({ ...setUsers, [users]: res.data })
    //         console.log('SUCCESS!', res)
    //         window.localStorage.setItem("token", res.data.payload)
    //         window.localStorage.setItem("id", res.data.user_id)
    //         history.push("/postlist")
    //         setFormState({
    //             username: '',
    //             password: '',
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err.response);
    //     })
    // }
    const handleSubmit = e => {
        e.preventDefault()
        login(formState)
        setTimeout(() => {
           history.push(`/postlist`)
        }, 1000)
     }

    return (
            <div className='login'>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor='username'>
                   
                    <input 
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Type your username here.'
                    value={formState.name}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='password'>
                    
                    <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Type your password here.'
                    value={formState.password}
                    onChange={handleChange}
                    />
                </label>
                <div>
                    <p> {errors.name} </p>
                    <p> {errors.password} </p>
                    <div>
                        <button disabled={btnDisabled} type='submit' >
                            Log in
                        </button>
                    </div>
                </div>
            </form>
            </div>
        
    )
}
const mapStateToProps = state => (
    {
       user: state.loginReducer.user,
       isFetching: state.loginReducer.isFetching,
       error: state.loginReducer.error
    }
 )
export default connect(mapStateToProps, { login })(LogInForm);