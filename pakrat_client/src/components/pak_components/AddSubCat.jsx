import { useState } from "react"

export default function AddSubCat ({subCats, setSubCats}) {

    let emptyCatForm = {
        name: '',
        // items: []
    }

    const [newCat, setNewCat] = useState(emptyCatForm)

    const handleChange = (event) => {
        setNewCat({...newCat, [event.target.id]: event.target.value})
        console.log(newCat)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newCat)
        setSubCats([...subCats, newCat])
        console.log(subCats)
        setNewCat(emptyCatForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' id='name' onChange={handleChange} value={newCat.name} className='border-2'></input>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}