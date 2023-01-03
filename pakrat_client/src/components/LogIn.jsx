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

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
        // console.log(formState)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formState)
        const payload = await LogInUser(formState)
        setFormState(initialState)
        console.log(payload)
        setUser(payload)
        toggleAuthenticated(true)
        navigate('/')
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


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Email" 
                id="email"
                onChange={handleChange} 
                value={formState.email}/>
            <label htmlFor="email">Email</label>

            <input 
                type="password" 
                placeholder="Password" 
                id="password" 
                onChange={handleChange}
                value={formState.password}/>
            <label htmlFor="password">Password</label>
    
            <button type="submit">Log In</button>
            </form>
    )
}