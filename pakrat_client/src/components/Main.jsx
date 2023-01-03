
import CreatePak from "./pak_components/CreatePak"
import Landing from "./Landing"
import Pak from "./pak_components/Pak"

import { Route, Routes } from 'react-router-dom'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/create_pak' element={<CreatePak />}/>
                <Route path='/pak/:pak_id' element={<Pak />}/>
            </Routes>
            
        </div>
    )
}