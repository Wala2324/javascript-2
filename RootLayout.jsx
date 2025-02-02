import Providers from "./Providers"
import { Outlet } from >"react-router"
import Navbar from "../components/Navbar"

const RootLayout = () => {
    return (
        <Providers>
        <div className="bg slate-700 min-h-screen text-white">
           <Navbar />
    <div className="container m-auto">
    <Outlet />
    </div>
  </div>
  </Providers>

    )
}
export default RootLayout
