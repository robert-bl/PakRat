import { useState, useContext } from "react"
import { DataContext } from "../../DataContext"
import { useNavigate } from "react-router-dom"
import axiosCreate from "../../services/apiServices"


export default function CreatePak () {

    const { user } = useContext(DataContext)

    let navigate = useNavigate()

    let pakForm = {
        name: '',
        description: '',
        userId: user.id
    }

    const [newPak, setNewPak] = useState(pakForm)

    const handleChange = (event) => {
        setNewPak({...newPak, [event.target.id]: event.target.value})
        console.log(newPak)
    }

    const postPak = async (data) => {
        try {
            const response = await axiosCreate.post(`/api/pak/create_new_pak`, data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const resData = await postPak(newPak)
        navigate(`/pak/${resData.id}`)
        setNewPak(pakForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Pak Name</label>
                <input type='text' id='name' onChange={handleChange} placeholder='pak name' value={newPak.name}></input>
                <label>Description</label>
                <input type='text' id='description' onChange={handleChange} placeholder='description' value={newPak.description}></input>
                <button type='submit'>Create Pak</button>
            </form>
        </div>
    )
}