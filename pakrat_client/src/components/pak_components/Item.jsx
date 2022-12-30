
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../DataContext'


export default function Item ({itemInfo, itemIndex}) {

    const { pakItems, setPakItems } = useContext(DataContext)

    const add = (event) => {
        event.preventDefault()
        let updateItems = [...pakItems]
        updateItems[itemIndex].quantity += 1
        setPakItems(updateItems)
        console.log(pakItems[itemIndex].quantity)
    }

    const sub = (event) => {
        event.preventDefault()
        if (pakItems[itemIndex].quantity > 0) {
            let updateItems = [...pakItems]
            updateItems[itemIndex].quantity -= 1
            setPakItems(updateItems)
        }
        console.log(pakItems[itemIndex].quantity)
    }

    const remove = (event) => {
        event.preventDefault()
        let cutPak = [...pakItems]
        cutPak.splice(itemIndex, 1)
        setPakItems(cutPak)
        console.log(pakItems)
    }



    return (
        <div>
            <div>{itemInfo.name}</div>
            <div>{pakItems[itemIndex].quantity}</div>
            <div>
                <button onClick={add}>Add</button>
                <button onClick={sub}>Sub</button>
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    )
}