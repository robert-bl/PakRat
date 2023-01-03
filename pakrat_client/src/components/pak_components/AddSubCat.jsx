import { useState, useContext } from "react"
import { DataContext } from "../../DataContext"

export default function AddSubCat () {

    const {subCats, setSubCats} = useContext(DataContext)

    let emptyCatForm = {
        name: '',
        // items: []
    }

    const [newCat, setNewCat] = useState(emptyCatForm)

    const handleChange = (event) => {
        setNewCat({...newCat, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubCats([...subCats, newCat.name])
        setNewCat(emptyCatForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' id='name' onChange={handleChange} value={newCat.name} className='border-2 text-dark'></input>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}