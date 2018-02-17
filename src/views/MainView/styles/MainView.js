import styled from 'styled-components';

export const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.color};
`;

export const ChangeButton = styled.button`
    margin-top: 30px;
`;