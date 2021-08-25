import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface PageProps {
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
   ? ({ theme }) => theme.colors.alternativeLight : 'white'};
`;

export const ButtonDiary = styled(Button)<ButtonProps>`
  background-color:
  ${props => (props.page == 'ListNotes')
   ? ({ theme }) => theme.colors.alternativeLight : 'white'};
`;

export const ButtonList = styled(Button)<ButtonProps>`
  background-color:
  ${props => (props.page == 'ListTasklists')
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

export const ContainerAdd = styled.View<PageProps>`
display: ${props => props.page === 'Settings' ? "none" : "flex"};
padding: 10px;
border-radius:35px;
top: -40px;
left: 167.5px;
position: absolute;
background-color: ${({ theme }) => theme.colors.alternativeLight};
`;

export const AddBackground = styled.View<PageProps>`
border-radius: 25px;
background-color: ${
props => props.page.includes('Add') ? ({ theme }) => theme.colors.primary 
: ({ theme }) => theme.colors.secondary
};
`;

export const Add = styled(Entypo)<PageProps>`
color: ${props => props.page.includes('Add') ? ({ theme }) => theme.colors.secondary 
: ({ theme }) => theme.colors.primary};
font-size: 40px;
padding:10px;
`;
export const Clock = styled(Entypo)<PageProps>`
color: ${({ theme }) => theme.colors.primary};
font-size: ${iconSize};
`;
export const Settings = styled(Entypo)<PageProps>`
color: ${({ theme }) => theme.colors.primary};
font-size: ${iconSize};
`;
