import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import dados from "../data/informacoes.json";
import { useState } from "react";

/*const dados = [
    {
        "simbolo": "W",
        "descricao": "Primeiro dado.",
        "data": "28/02/1884"
    },
    {
        "simbolo": "O",
        "descricao": "Outro dado.",
        "data": "28/02/1884"
    }
];*/

const Sobre = () => {
    const [info, setInfo] = useState(dados);

    const filtra = (entrada) =>{
        setInfo(dados.filter( (e) => e.descricao.includes(entrada)));
    }

    return (
        <>
        <Menu />
        <h1>Sobre</h1>
        <p>Meu novo teste</p>
        <input type='text' onChange={(e) => filtra(e.target.value)}/>
        {
            info.map(
                (ele, ind) => (
                <Cartao
                        key={ind}
                        simb={ele.simbolo}
                        descri={ele.descricao}
                        data={ele.data}
                        cor={ele.cor}
                /> 
                )
            )
        }
        </>
    )
};


export default Sobre;