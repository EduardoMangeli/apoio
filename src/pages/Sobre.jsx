import Menu from "../components/Menu/Menu";
import Cartao from "../components/Cartao/Cartao";
import dados from "../data/informacoes.json";

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

const Sobre = () => (
    <>
    <Menu />
    <h1>Sobre</h1>
    <p>Meu novo teste</p>
    {
        dados.map(
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
);


export default Sobre;