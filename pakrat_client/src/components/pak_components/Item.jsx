
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../DataContext'

import { ImDownload, ImCheckmark } from "react-icons/im"
import { BsFillBagPlusFill, BsFillBagCheckFill } from "react-icons/bs"
import { HiPlusSm, HiMinusSm, HiOutlineX } from "react-icons/hi"



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
        setOpenToggle(!openToggle)
    }

    const handlePacked = () => {
        let packingItem = [...pakItems]
        packingItem[itemIndex].packed = !packingItem[itemIndex].packed
        setPakItems(packingItem)
    }

    let packedColorCode = ''
    pakItems[itemIndex].packed ? packedColorCode = 'bg-highlight text-light' : packedColorCode = 'bg-transparent'

    let packingItemStyle = `flex flex-row justify-between gap-2 p-2 ${packedColorCode}`

    return (
        packingMode ?
        <div className={packingItemStyle}>
            <div className='flex gap-2'>
                <div>{itemInfo.name}</div>
                {pakItems[itemIndex].count > 1 ? <div>{pakItems[itemIndex].count}</div> : null}
                </div>
            <div onClick={handlePacked}>{!pakItems[itemIndex].packed ? <ImDownload/> : <ImCheckmark/>}</div>
        </div>
        :
        <div className='flex justify-between content-center border-b-2 border-highlight p-2'>
            <div className='flex flex-row gap-2' onClick={() => setOpenToggle(!openToggle)}>
                <div>{itemInfo.name}</div>
                {pakItems[itemIndex].count > 1 ? <div>{pakItems[itemIndex].count}</div> : null}
            </div>

            <div className='flex'>
                <div className='flex flex-col mr-4'>
                    <button onClick={add}><HiPlusSm/></button>
                    <button onClick={sub}><HiMinusSm/></button>
                </div>
                <button onClick={remove}><HiOutlineX/></button>
            </div>
        </div>
    )
}

// {!openToggle ? null :