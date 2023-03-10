import { useState, useContext } from "react"
import { DataContext } from '../../DataContext'
import axiosCreate from "../../services/apiServices"

import AddSubCat from "./AddSubCat"
import PackingToggler from "./PackingToggler"
import ProgressBar from "./ProgressBar"


export default function PakControls () {

    const { pakInfo, setPakItems, pakItems, toDelete, setToDelete, getPakInfo, packingMode } = useContext(DataContext)

    // const postPak = async (data) => {
    //     try {
    //         const response = await axiosCreate.post('/api/pak/create_new_pak', data)
    //         return response.data
    //     } catch (error) {
    //         throw error
    //     }
    // }

    const updatePak = async () => {
        let itemsData = sortItemsForAxios(pakItems, toDelete)
        await deleteItems(itemsData.removedItems)
        await updateItems(itemsData.existingItems)
        await createItems(itemsData.newItems, pakInfo.id)
        getPakInfo()
    }

    const createItems = async (newItems, pakIdNo) => {
        let data = {
            pakId: pakIdNo,
            items: newItems
        }
        try {
            const response = await axiosCreate.post(`/api/item/create`, data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const updateItems = async (existingItems) => {
        let data = {items: existingItems}
        try {
            const response = await axiosCreate.put(`/api/item/update`, data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    const deleteItems = async (removedItems) => {
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

    // const submitPak = () => {
    //     if (!pakInfo.id) {
    //     let constructItems = {pakItems: pakItems}
    //     let insertItems = {...pakInfo, ...constructItems}
    //     postPak(insertItems)
    //     } else {
    //         updatePak()
    //     }
    // }

    const unpack = () => {
        let unpackingItems = pakItems
        let unpacked = unpackingItems.map((x) => {
            x.packed = false
            return x
        })
        setPakItems(unpacked)
        // setPakItems(unpacked)
    }

    const buttonStyle = `bg-highlight text-light w-24 h-8 flex items-center justify-center rounded-md cursor-pointer my-4 hover:bg-light hover:text-highlight duration-300 border-2 border-highlight`

    return (
        <div>
            <div className="grid grid-cols-3">
                <div className='text-xl font-playfair'>{pakInfo.name}</div>
                <PackingToggler />
                <div className="flex justify-end items-start">
                    <div onClick={updatePak} className={buttonStyle}>Save Pak</div>
                </div>
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