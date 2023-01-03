import { useState } from "react"

export default function CreatePak () {


    let pakForm = {
        name: '',
        description: '',
        userId: 1
    }

    const [newPak, setNewPak] = useState(pakForm)

    const handleChange = (event) => {
        setNewPak({...newPak, [event.target.id]: event.target.value})
        console.log(newPak)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newPak)
        
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