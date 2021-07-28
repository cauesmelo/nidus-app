import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.alternativeLight};
flex: 1;
`;

export const Main = styled.View`
flex: 1;
background-color: ${({ theme }) => theme.colors.secondary};
border-radius: 20px;
margin: 0 20px;
`;

export const Footer = styled.View`
border:1px solid green;
`;