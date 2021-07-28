import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius:20px;
  max-height: 150px;
  margin-bottom:50px;
  flex: 1;
  flex-direction:row;
  align-items: flex-end;
  padding:10px 40px;
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

export const UserPhoto = styled.View`
  flex: 1;
  min-height: 50px;
  max-width: 50px;
  border:1px solid red;
  border-radius:25px;
`;
