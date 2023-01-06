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
    }
    
    const [formState, setFormState] = useState(initialState)
    
    const handleChange = (event) => {

        setFormState({...formState, [event.target.id]: event.target.value})
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
            navigate(`/login`)
        } else {
            console.log(`passwords don't match`)

        }
    }

    const buttonStyle = `bg-med w-24 h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-dark hover:text-light duration-300`
    
    return (
        <div className="w-4/5 mx-auto shadow-2xl bg-light p-2 mt-10">
            <div className='text-xl'>Register</div>
            <form onSubmit={handleSubmit}>
                <div className='ml-60'>
                <div className='flex-col'>
                    <div htmlFor="username">Username</div>
                    <input type="text" placeholder="Username" id="userName" onChange={handleChange} value={formState.userName} className='rounded-sm pl-2'/>
                </div>
                <div>
                    <div htmlFor="email">Email</div>
                    <input type="text" placeholder="Email" id="email" onChange={handleChange} value={formState.email} className='rounded-sm pl-2'/>
            
                </div>
                <div>
                    <div htmlFor="password">Password</div>
                    <input type="password" placeholder="Password" id="password" onChange={handleChange} value={formState.password} className='rounded-sm pl-2'/>
                </div>
                <div>
                    <div htmlFor="passwordConfirm">Confirm password</div>
                    <input type="password" placeholder="Confirm password" id="passwordConfirm" onChange={handleChange} value={formState.passwordConfirm} className='rounded-sm pl-2'/>
                </div>
    
                <button type="submit" className={buttonStyle}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}