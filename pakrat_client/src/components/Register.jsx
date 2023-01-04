import { useState } from 'react'
import axiosCreate from '../services/apiServices'
import { useNavigate } from 'react-router-dom'


export default function Register () {

    let navigate = useNavigate()

    const initialState = {
        userName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        // matchValid: false,
        // lengthValid: false,
        // numbersValid: false
    }
    
    const [formState, setFormState] = useState(initialState)
    
    const handleChange = (event) => {
    
        // let form = formState
    
        // form = {...form, [event.target.id]: event.target.value}
    
        // if (form.password === form.passwordConfirm && form.password !== '') {
        //     form = {...form, matchValid: true}
        // } else {
        //     form = {...form, matchValid: false}
        // }
    
        // if (form.password.length > 6) {
        //     form ={...form, lengthValid: true}
        // } else {
        //     form ={...form, lengthValid: false}
        // }
    
        // if (/[0-9]/.test(form.password)) {
        //     form = {...form, numbersValid: true}
        // } else {
        //     form = {...form, numbersValid: false}
        // }
    

        setFormState({...formState, [event.target.id]: event.target.value})
        // console.log(formState)
    }

    const registerUser = async (data) => {
        try {
            const response = await axiosCreate.post(`/api/user/register`, data)
        } catch (error) {
            throw error
        }
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (formState.password === formState.passwordConfirm) {
            await registerUser(formState)
            setFormState(initialState)
            alert('You have succesfully registered an account.')
            navigate(`/login`)
            // setFormState({...formState, matchValid: true})
        } else {
            console.log(`passwords don't match`)
            // setFormState({...formState, matchValid: false})
        }
        // console.log(formState)
    }

    const buttonStyle = `bg-med w-24 h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-dark hover:text-light duration-300`
    
    return (
        <div className="w-4/5 mx-auto border-2 border-black rounded-md">
            <form onSubmit={handleSubmit}>
                <div className='ml-60'>
                <div className='flex-col'>
                    <div htmlFor="username">Username</div>
                    <input type="text" placeholder="Username" id="userName" onChange={handleChange} value={formState.userName} className='border border-med rounded-sm'/>
                </div>
                <div>
                    <div htmlFor="email">Email</div>
                    <input type="text" placeholder="Email" id="email" onChange={handleChange} value={formState.email} className='border border-med rounded-sm'/>
            
                </div>
                <div>
                    <div htmlFor="password">Password</div>
                    <input type="password" placeholder="Password" id="password" onChange={handleChange} value={formState.password} className='border border-med rounded-sm'/>
                </div>
                <div>
                    <div htmlFor="passwordConfirm">Confirm password</div>
                    <input type="password" placeholder="Confirm password" id="passwordConfirm" onChange={handleChange} value={formState.passwordConfirm} className='border border-med rounded-sm'/>
                </div>
    
                <button type="submit" className={buttonStyle}>Sign Up</button>
                </div>
            </form>
            {formState.password.length > 6 && formState.numbersValid ? 
                formState.matchValid ? <p className="valid">Password matches</p> : <p className="invalid">Passwords must match.</p> 
            : <p className="invalid">Passwords must be at least 7 characters and contain at least one number.</p>
            }
        </div>
    )
}