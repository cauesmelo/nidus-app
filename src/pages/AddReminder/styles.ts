import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.alternativeLight};
flex: 1;
`;

export const Main = styled.View`
background-color: ${({ theme }) => theme.colors.secondary};
border-radius: 20px;
padding: 20px;
justify-content: center;
`;

export const MainContainer = styled.View`
flex: 1;
justify-content: center;
margin: 0px;
`;
