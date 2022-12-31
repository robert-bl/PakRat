import { useState, useContext } from "react"
import { DataContext } from '../../DataContext'

import AddSubCat from "./AddSubCat"
import axiosCreate from "../../services/apiServices"

export default function PakControls () {

    const { pakInfo, setPakInfo, pakItems } = useContext(DataContext)

    const postPak = async (data) => {
        try {
            const response = await axiosCreate.post('/api/pak/create_new_pak/1', data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const submitPak = () => {
        let constructItems = {pakItems: pakItems}
        let insertItems = {...pakInfo, ...constructItems}
        postPak(insertItems)
    }

    return (
        <div>
            <div>
                <div>New Category</div>
                <AddSubCat />
            </div>
            <div>Toggle Mode</div>
            <div onClick={submitPak}>PostPak</div>
        </div>
    )
}