import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

export const Title = styled.Text`
  font-size: 30px;
  margin: 20px;
`;

export const LargeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 28px;
  text-align: center;
  margin: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Title1 = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.alternative};
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  margin: 20px;
`;

export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.alternativeLight};
flex: 1;
`;

export const Main = styled.View`
background-color: ${({ theme }) => theme.colors.secondary};
border-radius: 20px;
padding:0px 20px 40px 20px;
height: 100%;
`;

export const MainContainer = styled.View`
flex: 1;
margin: 0px;
`;

export const Loading = styled(ActivityIndicator)`
  margin-top: 50px;
`;

export const ScrollContainer = styled.ScrollView``;