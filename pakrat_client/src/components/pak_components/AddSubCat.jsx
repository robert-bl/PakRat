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
        if (newCat.name !== '') {
        setSubCats([...subCats, newCat.name])
        setNewCat(emptyCatForm)
        }
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit}>
                <input type='text' id='name' onChange={handleChange} placeholder="Add Category (e.g. 'Clothes', 'Gear', 'Food')" value={newCat.name} className='border-t border-l border-b border-highlight pl-2 w-80'></input>
                <button type='submit' className="bg-highlight px-2 border-t border-r border-b border-highlight rounded-r-md text-light">+</button>
            </form>
        </div>
    )
}