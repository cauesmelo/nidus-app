import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
`;

export const Text = styled(TextInput)`

border-radius: 5px;
height: 150px;
padding: 10px;
background-color: ${({ theme }) => theme.colors.alternativeLight};
border:1px solid ${({ theme }) => theme.colors.alternative};
color:${({ theme }) => theme.colors.primary};
`;

export const MaxChar = styled.Text`
text-align: right;
margin-right: 10px;
margin-top: 10px;
`;