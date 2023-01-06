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
        if (newPak.name !== '') {
        const resData = await postPak(newPak)
        navigate(`/pak/${resData.id}`)
        setNewPak(pakForm)
        }
    }

    const buttonStyle = `bg-med w-24 h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-dark hover:text-light duration-300`

    return (
        <div className="w-4/5 mx-auto shadow-2xl bg-light p-2 mt-10">
            <div className="flex justify-center">
                <div className="text-xl">New Pak</div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col w-4/5 mx-auto'>
                <div className="flex flex-col py-2">
                    <label>Pak Name</label>
                    <input type='text' id='name' onChange={handleChange} placeholder='pak name' value={newPak.name} className="pl-2"></input>
                </div>
                <div className="flex flex-col py-2">
                    <label>Description</label>
                    <input type='text' id='description' onChange={handleChange} placeholder='description' value={newPak.description} className="pl-2"></input>
                </div>
                <div className="flex justify-center">
                    <button type='submit' className={buttonStyle}>Create Pak</button>
                </div>
            </form>
        </div>
    )
}