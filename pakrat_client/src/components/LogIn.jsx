import { useState } from "react"

export default function LogIn () {
    
    const initialState = {
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialState)

    return (
        <div>
            <div>Login</div>
        </div>
    )
}