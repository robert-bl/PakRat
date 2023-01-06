import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../DataContext"

export default function ProgressBar () {
    const { pakItems } = useContext(DataContext)

    const [progress, setProgress] = useState('0%')

    useEffect(() => {
        let packedSum = 0
        pakItems.map((x) => x.packed ? packedSum += 1 : null)
        let packedPercentage =  Math.floor((packedSum/pakItems.length)*100)
        packedPercentage === NaN ? setProgress(`0%`) : setProgress(`${packedPercentage}%`)
    }, [pakItems])

    return (
        <div className="flex gap-2 border-b-2 border-highlight">
            <div class="w-full bg-gray-400 rounded-full h-2.5 mt-2">
                <div class="bg-highlight h-2.5 rounded-full" style={{width: progress}}></div>
            </div>
            <div>{progress}</div>
        </div>
    )
} 