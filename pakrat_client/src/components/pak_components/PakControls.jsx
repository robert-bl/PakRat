import { useState } from "react"

import AddSubCat from "./AddSubCat"

export default function PakControls ({subCats, setSubCats}) {

    return (
        <div>
            <div>
                <div>New Category</div>
                <AddSubCat subCats={subCats} setSubCats={setSubCats}/>
            </div>
            <div>Toggle Mode</div>
        </div>
    )
}