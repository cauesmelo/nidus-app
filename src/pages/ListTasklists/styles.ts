import styled from 'styled-components/native';
import { CheckBox } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';

export const CardTasklist = styled.View`
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
margin-bottom: 30px;
border-radius: 5px;
padding: 10px;
flex: 1;
flex-direction: column;
`;

export const CardTasklistTitle = styled.Text`
flex: 1;
font-size: 18px;
margin-bottom:10px;
`;

export const Task = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
margin-top:5px;
`;

export const InputCheckBox = styled(CheckBox)`
`;

export const TaskText = styled.Text`
margin-left: -10px;
`;

export const CardContainerTasklistTitle = styled.View`
flex: 1;
flex-direction: row;
`;

export const DeleteTasklist = styled.TouchableOpacity`
margin-left: 5px;
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
border-radius: 10px;
flex: 1;
height: 20px;
justify-content: center;
align-items: center;
max-width: 20px;
`;

export const Delete = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: 10px;
`;

