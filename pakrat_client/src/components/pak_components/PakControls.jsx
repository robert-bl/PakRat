import { useState } from "react"


import AddSubCat from "./AddSubCat"

export default function PakControls () {

    return (
        <div>
            <div>
                <div>New Category</div>
                <AddSubCat />
            </div>
            <div>Toggle Mode</div>
        </div>
    )
}