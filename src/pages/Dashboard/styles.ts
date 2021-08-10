import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.alternativeLight};
flex: 1;
`;

export const Main = styled.ScrollView`
flex: 1;
background-color: ${({ theme }) => theme.colors.alternativeLight};
border-radius: 20px;
margin: 0 10px;
`;

export const Footer = styled.View`
border:1px solid green;
`;