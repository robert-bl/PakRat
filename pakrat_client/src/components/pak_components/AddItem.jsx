import { useState, useContext } from "react"
import { DataContext } from "../../DataContext"

export default function AddItem ({catName}) {

    const {pakItems, setPakItems} = useContext(DataContext)

    let emptyItemForm = {
        name: '',
        count: 1,
        subCategory: catName,
        packed: false
    }

    const [newItem, setNewItem] = useState(emptyItemForm)

    const handleChange = (event) => {
        setNewItem({...newItem, [event.target.id]: event.target.value})
        console.log(newItem)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(pakItems)
        setPakItems([...pakItems, newItem])
        // console.log(pakItems)
        setNewItem(emptyItemForm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' id='name' onChange={handleChange} value={newItem.name} className='border-2'></input>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}