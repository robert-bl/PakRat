import { useState, useEffect } from "react"
import { DataContext } from "../../DataContext"

import PakControls from "./PakControls"
import PakSubCat from "./PakSubCat"

export default function Pak () {

    const [pakInfo, setPakInfo] = useState({
        name: 'Test Pak',
        description: 'Test Desc.',
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
        <div className="bg-dark text-light">
            <DataContext.Provider value={{pakInfo, setPakInfo, pakItems, setPakItems, subCats, setSubCats}}>
            <div>
            <PakControls />
            </div>
            <div>
                {subCats.map((x) => (
                    <PakSubCat catInfo={x} key={x.name} />
                ))}
            </div>
            </DataContext.Provider>
        </div>
    )
}