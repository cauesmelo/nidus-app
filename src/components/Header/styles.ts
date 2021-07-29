import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius:20px;
  max-height: 150px;
  margin-bottom:20px;
  flex: 1;
  flex-direction:row;
  align-items: flex-end;
  padding:20px 50px;
`;

export const Data = styled.Text`
height: 50px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 35px;
`;

export const ContainerData = styled.View`
height: 50px;
margin-left: 5px;
  flex: 1;
`;

export const Weekday = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
`;

export const Month = styled.Text`
  color: ${({ theme }) => theme.colors.alternative};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 13px;
`;

export const UserPhoto = styled.Image`
  border-radius: 25px;
  height: 50px;
  width: 50px;
`;

export const EndSessionContainer = styled.TouchableOpacity``;

export const EndSessionButton = styled.View<{ display: string }>`
display: ${p => p.display};
opacity: 1;
border-radius: 10px;
z-index: 99;
top: 60px;
left: -30px;
position: absolute;
border:1px solid ${({ theme }) => theme.colors.alternative};
width: 100px;
height: 30px;
align-items: center;
justify-content: center;
background-color:white;
`;
