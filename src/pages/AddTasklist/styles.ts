import styled, {css} from 'styled-components/native';
import { TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';

const iconSize = '15px';

interface TitleInputProps {
  active: boolean;
}

export const TitleInput = styled(TextInput)<TitleInputProps>`
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
padding: 10px 10px;
border-radius: 10px;
font-size: 16px;
padding: 15px;

${props => !props.active && css`
border: none;
color: black;
font-weight: bold;
`}
`;

export const CharCount = styled.Text`
margin-top: 20px;
text-align: right;
`;

export const Tasks = styled.View`
margin-top: 0px;
padding: 0px;
`;

export const Task = styled.View`
margin-top: 10px;
flex: 1;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const InputCheckBox = styled(CheckBox)`
`;

export const EditTask = styled.TouchableOpacity`
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
border-radius: 10px;
flex: 1;
height: 30px;
justify-content: center;
align-items: center;
max-width: 30px;
`;

export const Edit = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: ${iconSize};
`;

export const DeleteTask = styled.TouchableOpacity`
margin-left: 5px;
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
border-radius: 10px;
flex: 1;
height: 30px;
justify-content: center;
align-items: center;
max-width: 30px;
`;

export const Delete = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: ${iconSize};
`;


export const TaskText = styled.Text`
flex: 1;
justify-content: center;
align-items: center;
`;

export const BorderTop = styled.View`
border:0.5px solid ${({ theme }) => theme.colors.alternativeLight};
`;

export const AddTask = styled.View`
margin-top: 10px;
`;

export const AddTaskButton = styled.TouchableOpacity`
margin-top: 10px;
margin-left: 10px;
flex: 1;
flex-direction: row;
`;

export const AddTaskButtonText = styled.Text`
margin-left: 10px;
`;

export const Plus = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: ${iconSize};
`;

export const AddTaskInput = styled.TextInput`
padding: 10px 5px;
border-radius: 10px;
padding: 10px;
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
`;

export const AddTaskContainer = styled.View`
margin-top: 5px;
`;

export const AddTaskButtonComplete = styled.TouchableOpacity`
background-color: ${({ theme }) => theme.colors.primary};
border-radius: 10px;
`;

export const AddTaskButtonCompleteText = styled.Text`
color: ${({ theme }) => theme.colors.secondary};
padding: 10px 20px;
`;

export const AddTaskButtonCancel = styled.TouchableOpacity`
margin-left: 10px;
background-color: ${({ theme }) => theme.colors.alternativeLight};
border-radius: 10px;
`;

export const AddTaskButtonCancelText = styled.Text`
color: ${({ theme }) => theme.colors.primary};
padding: 10px 20px;
`;

export const AddTaskButtonsContainer = styled.View`
margin-top: 10px;
flex: 1;
flex-direction: row;
`;

export const ContentContainer = styled.ScrollView`
`;