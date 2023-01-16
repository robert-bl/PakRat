import { useContext } from "react"
import { DataContext } from "../../../DataContext"

import PackingToggler from "../PackingToggler"
import ProgressBar from "../ProgressBar"


export default function ULPakControls () {

    const { pakInfo, setPakItems, pakItems, packingMode } = useContext(DataContext)

    const unpack = () => {
        let unpackingItems = pakItems
        let unpacked = unpackingItems.map((x) => {
            x.packed = false
            return x
        })
        setPakItems(unpacked)
    }

    const buttonStyle = `bg-highlight text-light w-24 h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-light hover:text-highlight duration-300 border-2 border-highlight`

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className='text-xl font-playfair'>{pakInfo.name}</div>
                <PackingToggler />
            </div>
            {packingMode ? 
            <div>
                <div onClick={unpack} className='bg-light border border-dark w-36 h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-dark hover:text-light duration-300 ml-auto'>Unpack All Items</div>
                <ProgressBar /> 
            </div>
            : <div className="h-6 border-b-2 border-highlight"></div>}
        </div>
    )
}