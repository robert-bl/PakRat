import { useState, useEffect } from "react"

import PakControls from "./PakControls"
import PakSubCat from "./PakSubCat"

export default function Pak () {

    const [pakInfo, setPakInfo] = useState({
        name: 'Day Trip',
        description: '',
        items: []
    })

    const [pakItems, setPakItems] = useState([])

    const [subCats, setSubCats] = useState([{
        name: 'Misc.',
        // items: []
    }])

    // useEffect(() => {
    //     console.log(subCats)
    // }, [subCats])

    console.log(pakItems)
    return (
        <div>
            <PakControls subCats={subCats} setSubCats={setSubCats}/>
            <div>
                {subCats.map((x) => (
                    <PakSubCat catInfo={x} pakItems={pakItems} setPakItems={setPakItems} key={x.name}/>
                ))}
            </div>
        </div>
    )
}