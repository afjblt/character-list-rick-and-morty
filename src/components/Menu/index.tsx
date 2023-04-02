import { Link } from "react-router-dom";
import { MenuContainer } from "./styles";

export function Menu() {
    return(
        <MenuContainer>
            <Link to='/' className="home">Home</Link>
            <Link to='/favorites' className="favorites">Favoritos</Link>
        </MenuContainer>
    )
}