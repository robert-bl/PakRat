import { useContext } from "react"
import { DataContext } from "../../DataContext"

export default function PackingToggler () {

    const { packingMode, togglePackingMode } = useContext(DataContext)

    const handleChange = async () => {
        await togglePackingMode(!packingMode)
    }


    return (
        <div className="flex flex-row justify-center gap-2 my-2">
                <div>Editing</div>
                <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id='packingToggler' checked={packingMode} className="sr-only peer" onChange={handleChange}></input>
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    </label>
                </div>
                <div>Packing</div> 
            </div>
    )
}