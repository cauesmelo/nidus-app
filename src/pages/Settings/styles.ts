import { TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Setting = styled.View`
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
padding:20px;
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const SettingTitle = styled.Text`
color: ${({ theme }) => theme.colors.primary};
`;

export const SettingHandle = styled.Switch`
`;

export const NumberInput = styled(TextInput)`
  border: 1px solid ${({ theme }) => theme.colors.alternative};
  width: 150px;
  text-align:center;
  margin-left: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LineContainer = styled.View`
border:2px solid red;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled(TouchableOpacity)`
  border:1px solid ${({ theme }) => theme.colors.alternative};
  padding: 0px 10px;
  border-radius: 20px;
  margin-top: 10px;
  height: 20px;
`;

export const InsertContainer = styled.View`
  width: 100%;
`;

export const Text = styled.Text`
color: ${({ theme }) => theme.colors.primary};
`;

export const ColorSelector = styled.TouchableOpacity<{ color: string }>`
  height: 30px;
  width: 30px;
  border-radius: 25px;
  border:1px solid ${({ theme }) => theme.colors.alternative};
  background-color: ${props => props.color};
`;