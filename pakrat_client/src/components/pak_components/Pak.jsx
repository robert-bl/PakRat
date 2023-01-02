import { useState, useEffect } from "react"
import { DataContext } from "../../DataContext"
import axiosCreate from "../../services/apiServices"

import PakControls from "./PakControls"
import PakSubCat from "./PakSubCat"

export default function Pak () {

    const [pakInfo, setPakInfo] = useState({
        name: '',
        description: '',
        items: []
    })

    const [pakItems, setPakItems] = useState([])
    const [subCats, setSubCats] = useState(['Misc.'])
    const [toDelete, setToDelete] = useState([])

    const getPakInfo = async () => {
        const response = await axiosCreate.get('/api/pak/read/34')
        console.log(response.data)
        let readSubCats = []
        response.data.pakItems.map((x) => {
            return readSubCats.includes(x.subCategory) ? null : readSubCats.push(x.subCategory)
        })
        setSubCats(readSubCats)
        setPakInfo(response.data)
        setPakItems(response.data.pakItems)
    }

    useEffect(() => {
        getPakInfo()
    }, [])

    return (
        <div className="bg-dark text-light">
            <DataContext.Provider value={{pakInfo, setPakInfo, pakItems, setPakItems, subCats, setSubCats, toDelete, setToDelete, getPakInfo}}>
            <div>
            <PakControls />
            </div>
            
            <div>
                {subCats.map((x) => (
                    <PakSubCat catName={x} key={x} />
                ))}
            </div>
            </DataContext.Provider>
        </div>
    )
}