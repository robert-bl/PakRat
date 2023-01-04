import { useContext, useEffect, useState } from "react"
import { DataContext } from "../DataContext"
import { useNavigate, useParams } from "react-router-dom"
import axiosCreate from "../services/apiServices"

export default function UserPage () {

    let navigate = useNavigate()
    let { user_id } = useParams()

    const { user, authenticated } = useContext(DataContext)

    const [pakList, setPakList] = useState(null)

    const getUserPaks = async () => {
        try {
        const response = await axiosCreate.get(`/api/pak/get_paks/${user_id}`)
        console.log(response.data)
        setPakList(response.data)
        return response.data
        } catch (error) {
            throw error
        }
    }

    const goToPak = (pakId) => {
        navigate(`/pak/${pakId}`)
    }

    useEffect(() => {
        getUserPaks()
    }, [])

    return (
        (authenticated && user && parseInt(user.id) === parseInt(user_id) && pakList) ? (
        <div className="w-4/5 mx-auto shadow-2xl bg-light p-2">
            <div>
            <div>PAKS</div>
            {pakList.map((x) => (
                <div key={x.id} onClick={() => goToPak(x.id)} className='bg-med m-2 p-2 border-b-2 border-highlight cursor-pointer shadow-md'>
                    <div>{x.name}</div>
                    <div className="pl-8">{x.description}</div>
                </div>
            ))}
            </div>
        </div>)
        : <div>Access Denied</div>
    )
}