
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../DataContext'


export default function Item ({itemInfo, itemIndex}) {

    const { pakItems, setPakItems,toDelete, setToDelete, packingMode } = useContext(DataContext)

    const [openToggle, setOpenToggle] = useState(false)

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

    const handlePacked = () => {
        let packingItem = [...pakItems]
        packingItem[itemIndex].packed = !packingItem[itemIndex].packed
        setPakItems(packingItem)
    }

    let packedColorCode = ''
    pakItems[itemIndex].packed ? packedColorCode = 'bg-med' : packedColorCode = 'bg-transparent'

    let packingItemStyle = `flex flex-row gap-2 ${packedColorCode}`

    return (
        packingMode ?
        <div className={packingItemStyle}>
                <div>{itemInfo.name}</div>
                {pakItems[itemIndex].count > 1 ? <div>{pakItems[itemIndex].count}</div> : null}
                <div className='border border-light rounded-2xl ' onClick={handlePacked}>Packed</div>
        </div>
        :
        <div>
            <div className='flex flex-row gap-2' onClick={() => setOpenToggle(!openToggle)}>
                <div>{itemInfo.name}</div>
                {pakItems[itemIndex].count > 1 ? <div>{pakItems[itemIndex].count}</div> : null}
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