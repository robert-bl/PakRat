import { useContext, useEffect } from 'react'
import { DataContext } from '../../DataContext'

export default function Item ({itemInfo, itemIndex}) {

    const { pakItems, setPakItems } = useContext(DataContext)


    const add = (event) => {
        event.preventDefault()
        pakItems[itemIndex].quantity += 1
    }
    const sub = (event) => {
        event.preventDefault()
        if (pakItems[itemIndex].quantity > 0) {
            pakItems[itemIndex].quantity -= 1
        }
    }



    return (
        <div>
            <div>{itemInfo.name}</div>
            <div>{pakItems[itemIndex].quantity}</div>
            <div>
                <button onClick={add}>Add</button>
                <button onClick={sub}>Sub</button>
            </div>
        </div>
    )
}