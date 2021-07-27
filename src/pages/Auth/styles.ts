import styled from 'styled-components/native';

export const Container = styled.View`
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
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  margin: 20px;
`;

export const Title1 = styled.Text`
  font-size: 15px;
  color: #666666;
  text-align: center;
  margin: 20px;
`;

export const TwitterButton = styled.TouchableOpacity`
  margin: 20px;
  background-color: black;
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
  color: white;
  font-size: 18px;
`;