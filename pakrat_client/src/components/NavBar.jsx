import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../DataContext"


export default function NavBar () {

    let navigate = useNavigate()

    const { user, handleLogOut } = useContext(DataContext)

    const goTo= (path, param) => {
        navigate(`${path}${param ? param : ''}`)
    }

    const navLinkStyle = `cursor-pointer`

    return (
        <div className="flex justify-between p-2 bg-med font-playfair">
            <div className='text-6xl p-2 text-dark'>PakRat</div>
            <div className="flex-col gap-2">
            <div onClick={() => goTo('/user/',user.id)} className={navLinkStyle}>Home</div>
                {user ? <div onClick={() => handleLogOut()} className={navLinkStyle}>Log Out</div> : null}
            </div>
        </div>
    )
}