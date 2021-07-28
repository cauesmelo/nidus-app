import styled from 'styled-components/native';
import theme from '../../global/styles/theme';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 61px;
  width: 107px;
  margin: 20px;
`;

export const LargeTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 28px;
  text-align: center;
  margin: 20px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Title1 = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.alternative};
  font-family: ${({theme}) => theme.fonts.regular};
  text-align: center;
  margin: 20px;
`;

export const TwitterButton = styled.TouchableOpacity`
  margin: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex: 0 1 auto;
  flex-direction: row;
  padding: 20px;
  width: 80%;

`;

export const TwitterButtonLogo = styled.Image`
  width: 24px;
  margin-right: 10px;
  height: 19.5px;
`;

export const TwitterButtonText = styled.Text`
font-family: ${({theme}) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 15px;
`;