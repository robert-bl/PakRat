import { useContext } from "react"
import { DataContext } from "../DataContext"
import { useNavigate } from "react-router-dom"

export default function LogInVerified () {

    let navigate = useNavigate()

    const { user } = useContext(DataContext)

    return (
        user ?
        <div>
            <div>Hello {user.username}</div>
        </div>
        : null
    )
}