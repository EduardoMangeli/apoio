import { Container, Descricao, Momento, Simbolo } from "./style";

const Cartao = ( props ) => (
    <Container>
        <Simbolo>{ props.simb }</Simbolo>
        <Descricao>Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit. 
            Doloribus voluptas numquam possimus 
            obcaecati impedit suscipit illo 
            doloremque enim laudantium quaerat 
            pariatur amet dolores harum eveniet 
            voluptate dolorum, ratione 
            ipsa blanditiis!
        </Descricao>
        <Momento>{ props.data }</Momento>
    </Container>
);

export default Cartao;