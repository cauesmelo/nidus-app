import styled from 'styled-components/native';

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

