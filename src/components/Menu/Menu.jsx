import { Link } from "react-router-dom";
import { MeuNav } from "./style";

const Menu = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/qualquer">Qualquer</Link>
    </MeuNav>
);

export default Menu;