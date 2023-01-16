import { useState } from "react"
import { DataContext } from "../../../DataContext"

import AddSubCat from "../AddSubCat"
import ULPakControls from "./UlPakControls"
import PakSubCat from "../PakSubCat"

export default function ULPak () {

    const [pakInfo, setPakInfo] = useState({
        name: 'Your Pak',
        description: '',
        items: []
    })

    const [pakItems, setPakItems] = useState([])
    const [subCats, setSubCats] = useState([])
    const [packingMode, togglePackingMode] = useState(false)

    return (
        <div className="w-4/5 mx-auto shadow-2xl bg-light p-2 my-10">
            <DataContext.Provider value={{pakInfo, setPakInfo, pakItems, setPakItems, subCats, setSubCats, packingMode, togglePackingMode}}>
            <div>
            <ULPakControls />
            </div>
            
            <div className="grid grid-cols-1">
                {subCats.map((x) => (
                    <PakSubCat catName={x} key={x} />
                ))}
            </div>
            <AddSubCat />
            </DataContext.Provider>
        </div>
    )
}