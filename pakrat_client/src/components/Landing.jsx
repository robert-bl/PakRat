import { useNavigate, Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../DataContext"

export default function Landing () {
    const navigate = useNavigate()

    const { user } = useContext(DataContext)

    const goToUserPage = () => {
        navigate(`/user/${user.id}`)
    }

    const goToCreatePak = () => {
        navigate(`/create_pak`)
    }

    const goToRegister = () => {
        navigate('/register')
    }

    return (
        <div>
            <div>
                <Link to='/login'>LogIn</Link>
                <div onClick={() => goToRegister()}>Register</div>
            </div>
                <div onClick={() => goToUserPage()}>Go to User Page</div>
                <div onClick={() => goToCreatePak()}>Create Pak</div>
        </div>
    )
}