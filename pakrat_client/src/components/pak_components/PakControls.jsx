import { useState, useContext } from "react"
import { DataContext } from '../../DataContext'

import AddSubCat from "./AddSubCat"
import axiosCreate from "../../services/apiServices"

export default function PakControls () {

    const { pakInfo, setPakInfo, pakItems, toDelete, setToDelete } = useContext(DataContext)

    const postPak = async (data) => {
        try {
            const response = await axiosCreate.post('/api/pak/create_new_pak/1', data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const updatePak = async () => {
        let itemsData = sortItemsForAxios(pakItems, toDelete)
        deleteItems(itemsData.removedItems)
        updateItems(itemsData.existingItems)
    }

    const updateItems = async (existingItems) => {
        let data = {items: existingItems}
        console.log(data)
        try {
            const response = await axiosCreate.put(`/api/item/update`, data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const deleteItems = async (removedItems) => {
        console.log(removedItems)
        await removedItems.map(async (x) => {   
            try {
                const response = await axiosCreate.delete(`/api/item/delete/${x.id}`)
                return response.data
            } catch (error) {
                throw error
            }
        })
        setToDelete([])
    }

    const sortItemsForAxios = (items, deletedItems) => {
        let sortedItems = {
            newItems: [],
            existingItems: [],
            removedItems: deletedItems
        }
        items.map((x) => x.id ? sortedItems.existingItems.push(x) : sortedItems.newItems.push(x))
        return sortedItems
    }

    const submitPak = () => {
        if (!pakInfo.id) {
            console.log('no id')
        let constructItems = {pakItems: pakItems}
        let insertItems = {...pakInfo, ...constructItems}
        postPak(insertItems)
        } else {
            console.log('id')
            updatePak()
        }
    }

    return (
        <div>
            <div>
                <div>New Category</div>
                <AddSubCat />
            </div>
            <div>Toggle Mode</div>
            <div onClick={submitPak}>Save Pak</div>
        </div>
    )
}