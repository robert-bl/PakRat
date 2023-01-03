
import CreatePak from "./pak_components/CreatePak"
import Landing from "./Landing"
import LogIn from "./LogIn"
import Pak from "./pak_components/Pak"
import Register from "./Register"


import { Route, Routes } from 'react-router-dom'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/create_pak' element={<CreatePak />}/>
                <Route path='/pak/:pak_id' element={<Pak />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<LogIn />}/>
            </Routes>
            
        </div>
    )
}