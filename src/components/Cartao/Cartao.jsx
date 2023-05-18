import { Container, Descricao, Momento, Simbolo } from "./style";

const Cartao = ( props ) => (
    <Container>
        <Simbolo>{props.simb }</Simbolo>
        <Descricao>{props.descri}</Descricao>
        <Momento>{ props.data }</Momento>
    </Container>
);

export default Cartao;