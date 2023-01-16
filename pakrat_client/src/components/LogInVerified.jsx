import { useContext } from "react"
import { DataContext } from "../DataContext"
import { useNavigate } from "react-router-dom"

export default function LogInVerified () {

    let navigate = useNavigate()

    const { user } = useContext(DataContext)

    const goTo= (path, param) => {
        navigate(`${path}${param ? param : ''}`)
    }

    const buttonStyle = `bg-med mx-auto w-32 h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-dark hover:text-light duration-300`

    return (
        user ?
        <div>
            <div className="mx-auto mt-8 text-center text-lg">Welcome {user.username}</div>
            <div onClick={() => goTo('/user/',user.id)} className={buttonStyle}>Go To Your Paks</div>
        </div>
        : null
    )
}