import styled from 'styled-components/native';

export const CardNote = styled.Text`
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
margin-bottom: 20px;
border-radius: 5px;
padding: 10px;
color: ${({ theme }) => theme.colors.primary};
`;


export const Text = styled.Text`
color: ${({ theme }) => theme.colors.primary};
`;