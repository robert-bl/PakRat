import { useContext } from 'react'
import { DataContext } from '../../DataContext'

import AddItem from './AddItem'
import Item from './Item'

export default function PakSubCat ({catName}) {

    const { pakItems } = useContext(DataContext)

    return (
        !pakItems ? null :
        <div className="border-2 border-highlight rounded-2xl m-2">
            <div className='text-lg font-playfair bg-med rounded-t-xl p-2'>{catName}</div>
            <div className='m-2'>
            {pakItems.map((x, i) => (
                x.subCategory === catName ? 
                <div key={i}>
                    <Item itemInfo={x} itemIndex={i}/>
                </div> 
                : null
            ))}
            <AddItem catName={catName} />
            </div>
        </div>
    )
}