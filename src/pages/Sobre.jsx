import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";

const Sobre = () => (
    <>
    <Menu />
    <h1>Sobre</h1>
    <p>Meu novo teste</p>
    <Cartao 
        simb={"O"}
        data={"28/02/1884"}
    />
    <Cartao 
        simb={"T"}
        data={"30/01/2002"}
    />
    <Cartao 
        simb={"L"}
        data={"05/03/1995"}
    />
    </>
);


export default Sobre;