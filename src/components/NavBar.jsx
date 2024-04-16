import '../styles/StylesHeaders.css'
import { AiOutlineMenu, AiOutlineCaretUp } from "react-icons/ai";

export const NavBar = () => {
    return (
        <>
            <header className="header">
                <a className="logo" href="">INMOBILIARIA</a>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="icons">
                    <AiOutlineMenu id="menu-icon"/>
                    <AiOutlineCaretUp  id="close-icon"/>
                </label>
                <nav className="nav">
                    <a className="links" href="#">EN VENTA</a>
                    <a className="links" href="#">EN ALQUILER</a>
                    <a className="links" href="#">ASESORAMIENTO</a>
                </nav>
            </header>
        </>
    )
}
