import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Creators from "../pages/Creators"
import Profile from "../pages/Profile"


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/creators" element={<Creators />} />
                <Route path="/profile" element={<Profile />} />

            </Routes>
        </>
    )
}

export default AllRoutes
