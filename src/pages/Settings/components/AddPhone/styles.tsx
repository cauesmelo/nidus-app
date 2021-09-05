import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const Title1 = styled.Text``;

export const Input = styled(TextInput)`
border: ${({ theme }) => theme.colors.alternative};
margin-top:8px;
border-radius: 10px;
height: 40px;
padding:0px 10px;
`;

export const ButtonContainer = styled.View`
border:1px solid red;
flex: 1;
flex-direction:row;
width: 100%;
min-height: 50px;
`;