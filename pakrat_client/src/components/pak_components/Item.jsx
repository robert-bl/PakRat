
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../DataContext'


export default function Item ({itemInfo, itemIndex}) {

    const { pakItems, setPakItems,toDelete, setToDelete } = useContext(DataContext)

    const add = (event) => {
        event.preventDefault()
        let updateItems = [...pakItems]
        updateItems[itemIndex].count += 1
        setPakItems(updateItems)
        console.log(pakItems[itemIndex].count)
    }

    const sub = (event) => {
        event.preventDefault()
        if (pakItems[itemIndex].count > 1) {
            let updateItems = [...pakItems]
            updateItems[itemIndex].count -= 1
            setPakItems(updateItems)
        }
        console.log(pakItems[itemIndex].count)
    }

    const remove = (event) => {
        event.preventDefault()
        //add removed item to delete list if it has an id
        if (pakItems[itemIndex].id) {
        let addDeleteItem = [...toDelete]
        addDeleteItem.push(pakItems[itemIndex])
        setToDelete(addDeleteItem)
        } else {
            console.log('no id')
            console.log(toDelete)
        }

        //remove item from pak Items
        let cutPak = [...pakItems]
        cutPak.splice(itemIndex, 1)
        setPakItems(cutPak)
    }

    const [openToggle, setOpenToggle] = useState(false)



    return (
        <div>
            <div className='flex flex-row gap-2' onClick={() => setOpenToggle(!openToggle)}>
                <div>{itemInfo.name}</div>
                {pakItems[itemIndex].count > 1 && <div>{pakItems[itemIndex].count}</div>}
            </div>
            {!openToggle ? null :
            <div className='bg-med'>
                <button onClick={add}>Add</button>
                <button onClick={sub}>Sub</button>
                <button onClick={remove}>Remove</button>
            </div>
            }
        </div>
    )
}