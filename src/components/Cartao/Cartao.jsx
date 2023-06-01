import { Container, Descricao, Momento, Simbolo } from "./style";
import {BiAddToQueue} from "react-icons/bi";

const Cartao = ( props ) => (

    <Container>
        <BiAddToQueue />
        <Simbolo>{props.simb }</Simbolo>
        <Descricao>{props.descri}</Descricao>
        <Momento>{ props.data }</Momento>
    </Container>
);

export default Cartao;