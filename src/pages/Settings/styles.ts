import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.alternativeLight};
flex: 1;
`;

export const Main = styled.View`
background-color: ${({ theme }) => theme.colors.secondary};
border-radius: 20px;
padding:10px 20px;
justify-content: center;
`;

export const MainContainer = styled.View`
flex: 1;
justify-content: center;
margin: 0px;
`;

export const CardNote = styled.Text`
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
margin-bottom: 30px;
border-radius: 5px;
padding: 0px;
`;

export const Setting = styled.View`
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
padding: 20px;
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const SettingTitle = styled.Text`
`;

export const SettingHandle = styled.Switch`
`;
