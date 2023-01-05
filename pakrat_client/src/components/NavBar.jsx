import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../DataContext"

import RatIcon from "./LogoSVG"
import { BiUserCircle } from "react-icons/bi"

export default function NavBar () {

    let navigate = useNavigate()

    const { user, handleLogOut } = useContext(DataContext)

    const goTo= (path, param) => {
        navigate(`${path}${param ? param : ''}`)
    }

    const navLinkStyle = `cursor-pointer`

    return (
        <div className="flex justify-between p-2 bg-med font-playfair border-b-4 border-highlight">
            <div className="flex-col">
                <div className='text-6xl p-2 text-dark flex'>PakRat</div>
                <RatIcon/>
            </div>
            <div className="flex-col gap-2">
                {user ? 
                <div>
                    <div className="flex-col bg-highlight p-2 text-light rounded-bl-md">
                        <BiUserCircle/>
                        <div>{user ? user.username : null}</div>
                    </div>
                    <div onClick={() => goTo('/user/',user.id)} className={navLinkStyle}>Home</div>
                    <div onClick={() => handleLogOut()} className={navLinkStyle}>Log Out</div>
                </div>
                : <div onClick={() => goTo('/')} className={navLinkStyle}>Home</div>}
            </div>
        </div>
    )
}