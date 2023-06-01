import styled from "styled-components";
import { tabletSize } from "../../utils";

const Container = styled.div`
    border-radius: 5px;
    border: solid 1px black;

    display: flex;
    flex-direction: column;
    column-gap: 1em;

    margin: 5px;

    @media screen and (min-width: ${tabletSize}){
        flex-direction: row;
    }
`;

const Simbolo = styled.span`
    font-weight: bolder;
    text-align: center;
    font-size: x-large;
    background-color: ${(props) => props.cor};

    @media screen and (min-width: ${tabletSize}){
        font-size: large;
    }
`;

const Descricao = styled.span`
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 1.5em;
`;

const Momento = styled.span`
    font-family: monospace;
`;

export { Container, Simbolo, Descricao, Momento };