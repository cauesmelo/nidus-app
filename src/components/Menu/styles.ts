import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

interface ContainerAddProps {
  page: string;
}

export const Container = styled.View`
position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius:20px;
  max-height: 120px;
  margin-top:20px;
  flex: 1;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  padding:10px 20px 30px;
`;

export const Diary = styled(Entypo)`
  color:${({ theme }) => theme.colors.primary};
  font-size: 50px;
`;
export const Todo = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: 50px;
`;

export const ContainerAdd = styled.View<ContainerAddProps>`
display: ${props => props.page === 'Settings' ? "none" : "flex"};
padding: 10px;
border-radius:35px;
top: -40px;
left: 171px;
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
margin-left: 50px;
color:${({ theme }) => theme.colors.primary};
font-size: 50px;
`;
export const Settings = styled(Entypo)`
color:${({ theme }) => theme.colors.primary};
font-size: 50px;
`;
