import { useNavigate } from "react-router-dom"

export default function Landing () {
    const navigate = useNavigate()

    const goToPak = (pakNo) => {
        navigate(`/pak/${pakNo}`)
    }

    const goToCreatePak = () => {
        navigate(`/create_pak`)
    }
    return (
        <div>
            <div>
                <div>LogIn</div>
                <div>Register</div>
            </div>
                <div onClick={() => goToPak(34)}>Go to Pak</div>
                <div onClick={() => goToCreatePak()}>Create Pak</div>
        </div>
    )
}