import { useState, useContext } from "react"
import { DataContext } from "../../DataContext"

export default function AddItem ({catName}) {

    const {pakItems, setPakItems, packingMode} = useContext(DataContext)

    let emptyItemForm = {
        name: '',
        count: 1,
        subCategory: catName,
        packed: false
    }

    const [newItem, setNewItem] = useState(emptyItemForm)

    const handleChange = (event) => {
        setNewItem({...newItem, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (newItem.name !== '') {
        setPakItems([...pakItems, newItem])
        setNewItem(emptyItemForm)
        }
    }

    return (
        packingMode ?
        null :
        <div className="my-2">
            <form onSubmit={handleSubmit}>
                <input type='text' id='name' placeholder="New Item" onChange={handleChange} value={newItem.name} className='border-t border-l border-b border-highlight pl-2 rounded-bl-md'></input>
                <button type='submit' className="bg-highlight px-2 border-t border-r border-b border-highlight rounded-r-md text-light">+</button>
            </form>
        </div>
    )
}