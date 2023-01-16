import { useState, useContext } from "react"
import { DataContext } from "../DataContext"
import axiosCreate from "../services/apiServices"
import { useNavigate } from "react-router-dom"

export default function LogIn () {

    let navigate = useNavigate()
    
    const { user, setUser, toggleAuthenticated } = useContext(DataContext)

    const initialState = {
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialState)

    const goTo= (path, param) => {
        navigate(`${path}${param ? param : ''}`)
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const payload = await LogInUser(formState)
        setFormState(initialState)
        setUser(payload)
        toggleAuthenticated(true)
        goTo('/ver')
    }

    const LogInUser = async (data) => {
        try {
            const response = await axiosCreate.post('api/user/login', data)
            localStorage.setItem('token', response.data.token)
            return response.data.user
        } catch (error) {
            throw error
        }
    }

    const buttonStyle = `bg-med w-24 h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-dark hover:text-light duration-300`


    return (
        <div className="w-4/5 mx-auto shadow-2xl bg-light p-4 mt-10">
            <form onSubmit={handleSubmit}>
                <div className='text-xl'>Log In</div>
                <div className='ml-60'>
                    <div className='flex-col'>
                        <div htmlFor="email">Email</div>
                        <input type="text" placeholder="Email" id="email" onChange={handleChange} value={formState.email} className='rounded-sm'/>
                    </div>
                    <div className='flex-col'>
                        <div htmlFor="password">Password</div>
                        <input type="password" placeholder="Password" id="password" onChange={handleChange} value={formState.password} className='rounded-sm'/>
                    </div>
                    <button type="submit" className={buttonStyle}>Log In</button>
                </div>
            </form>
        </div>
    )
}