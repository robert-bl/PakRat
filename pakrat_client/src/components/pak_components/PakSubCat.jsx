
import AddItem from './AddItem'
import Item from './Item'

export default function PakSubCat ({catInfo, pakItems, setPakItems}) {

    return (
        <div>
            <h1>{catInfo.name}</h1>
            {pakItems.map((x) => (
                x.subCategory === catInfo.name ? 
                <div>
                    <Item name={x.name}/>
                </div> 
                : null
            ))}
            <AddItem 
            catName={catInfo.name}
            pakItems={pakItems} 
            setPakItems={setPakItems}   />
        </div>
    )
}