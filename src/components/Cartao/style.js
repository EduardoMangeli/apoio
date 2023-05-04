import styled from "styled-components";

const Container = styled.div`
    border-radius: 5px;
    border: solid 1px black;

    display: flex;
    flex-direction: row;
    column-gap: 1em;

    margin: 5px;
`;

const Simbolo = styled.span`
    font-weight: bolder;
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