import styled from 'styled-components/native';
import { TextInput, TouchableOpacity } from 'react-native';


export const Container = styled(TouchableOpacity)`
border-radius: 10px;
margin-top: 20px;
flex: 0 1 auto;
align-items: center;
justify-content: center;
height: 50px;
background-color: ${props => props.disabled === true ?
    ({ theme }) => theme.colors.alternativeLight :
    ({ theme }) => theme.colors.primary
  };
`;

export const Title = styled.Text`
color: ${({ theme }) => theme.colors.secondary};
`;
