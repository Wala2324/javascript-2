import { IoLogoOctocat } from "react-icons/io";
import { Link, NavLink } from "react-router"
import Dropdown from "./Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {

  const { totalQuantity } = useSelector(state => state. shoppingCart)

    return(
        <nav className="border-b">
<div className="px-2 container m-auto flex items-center justufy-between">
    <link to="/"><IoLogoOctocat ClassName"size-10" /></link>

    <ul className="flex item center gap-4">
        <li><Navlink to="/" >Home</Navlink></li>
        <li className="relative">
            {
                totalQuantity > 0 && (
                    <div className="text-xs z-10 w-4 h-4 bg-red-600 pointer-events-none rounded-full absolute left-3 bottom-3 flex items-center justify-center">{ totalQuantity}</div>
                )
            }
            <Dropdown>
              <Fashoppingcart />
            </Dropdown>
        </li>
    </ul>
</div>
        </nav>
    )
}
export default Navbar
