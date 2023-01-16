import { useNavigate, Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../DataContext"

import ULPak from "./pak_components/userlessPak_components/ULPak"

export default function Landing () {
    const navigate = useNavigate()

    const { user } = useContext(DataContext)

    const goTo= (path, param) => {
        navigate(`${path}${param ? param : ''}`)
    }

    const buttonStyle = `bg-med w-24 mx-auto h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-dark hover:text-light duration-300`

    return (
        <div className="grid grid-cols-2 m-10">
            <div className="m-auto">
                <div className="mx-auto text-center">Welcome to PakRat. Try out the 'Pak' packing list form here. Register and Log In to save an reuse Paks.</div>
                <ULPak/>
            </div>
            <div className="mx-auto w-3/5 border-2 rounded-lg border-highlight m-auto">
                <div onClick={() => goTo('/login')} className={buttonStyle}>Log In</div>
                <div onClick={() => goTo('/register')} className={buttonStyle}>Register</div>
            </div>
        </div>
    )
}