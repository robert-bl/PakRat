import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../DataContext"


export default function NavBar () {

    const { user, handleLogOut } = useContext(DataContext)

    return (
        <div>
                <Link to='/'>Home</Link>
                {user ?
                <div onClick={() => handleLogOut()}>Log Out</div>
                : null}
        </div>
    )
}