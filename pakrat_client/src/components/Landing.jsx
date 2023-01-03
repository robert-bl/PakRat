import { useNavigate, Link } from "react-router-dom"

export default function Landing () {
    const navigate = useNavigate()

    const goToPak = (pakNo) => {
        navigate(`/pak/${pakNo}`)
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
                <div onClick={() => goToPak(34)}>Go to Pak</div>
                <div onClick={() => goToCreatePak()}>Create Pak</div>
        </div>
    )
}