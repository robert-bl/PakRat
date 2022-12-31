import { useContext } from 'react'
import { DataContext } from '../../DataContext'

import AddItem from './AddItem'
import Item from './Item'

export default function PakSubCat ({catInfo}) {

    const { pakItems } = useContext(DataContext)

    return (
        !pakItems ? null :
        <div className="border-2 border-highlight rounded-2xl mx-4 my-4 px-2 py-2">
            <h1>{catInfo.name}</h1>
            {pakItems.map((x, i) => (
                x.subCategory === catInfo.name ? 
                <div key={i}>
                    <Item itemInfo={x} itemIndex={i}/>
                </div> 
                : null
            ))}
            <AddItem catName={catInfo.name} />
        </div>
    )
}