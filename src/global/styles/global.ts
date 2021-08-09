import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 30px;
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