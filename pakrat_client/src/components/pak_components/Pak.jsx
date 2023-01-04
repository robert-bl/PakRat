import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "../../DataContext"
import axiosCreate from "../../services/apiServices"

import PakControls from "./PakControls"
import PakSubCat from "./PakSubCat"

export default function Pak () {

    let { pak_id } = useParams()

    const [pakInfo, setPakInfo] = useState({
        name: '',
        description: '',
        items: []
    })

    const [pakItems, setPakItems] = useState([])
    const [subCats, setSubCats] = useState(['Misc.'])
    const [toDelete, setToDelete] = useState([])
    const [packingMode, togglePackingMode] = useState(false)

    const getPakInfo = async () => {
        const response = await axiosCreate.get(`/api/pak/read/${pak_id}`)
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
            <DataContext.Provider value={{pakInfo, setPakInfo, pakItems, setPakItems, subCats, setSubCats, toDelete, setToDelete, getPakInfo, packingMode, togglePackingMode}}>
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