import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface ContainerAddProps {
  page: string;
}

interface ButtonProps {
  page: string;
}

const iconSize = '30px';

export const Container = styled.View`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius:20px;
  max-height: 80px;
  margin-top:20px;
  flex: 1;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  padding:0px 20px 10px;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.alternativeLight};
  border-radius: 20px;
  height: 60px;
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 60px;
`;

export const ButtonClock = styled(Button)<ButtonProps>`
  margin-left: ${props => (props.page !== 'Settings')
   ? '80px' : '0px'};
  background-color:
  ${props => (props.page == 'ListReminders')
  || (props.page == 'AddReminder')
   ? ({ theme }) => theme.colors.alternativeLight : 'white'};
`;

export const ButtonDiary = styled(Button)<ButtonProps>`
  background-color:
  ${props => (props.page == 'ListNotes')
  || (props.page == 'AddNote')
   ? ({ theme }) => theme.colors.alternativeLight : 'white'};
`;

export const ButtonList = styled(Button)<ButtonProps>`
  background-color:
  ${props => (props.page == 'ListTasklists')
  || (props.page == 'AddTasklist')
   ? ({ theme }) => theme.colors.alternativeLight : 'white'};
`;

export const ButtonSettings = styled(Button)<ButtonProps>`
  background-color:
  ${props => (props.page == 'Settings')
   ? ({ theme }) => theme.colors.alternativeLight : 'white'};
`;

export const Diary = styled(Entypo)`
  color:${({ theme }) => theme.colors.primary};
  font-size: ${iconSize};
  padding: 10px;
`;
export const Todo = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: ${iconSize};
`;

export const ContainerAdd = styled.View<ContainerAddProps>`
display: ${props => props.page === 'Settings' ? "none" : "flex"};
padding: 10px;
border-radius:35px;
top: -40px;
left: 167.5px;
position: absolute;
background-color: ${({ theme }) => theme.colors.alternativeLight};
`;

export const AddBackground = styled.View`
background-color: ${({ theme }) => theme.colors.secondary};
border-radius: 25px;
`;

export const Add = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: 40px;
padding:10px;
`;
export const Clock = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: ${iconSize};
`;
export const Settings = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: ${iconSize};
`;
