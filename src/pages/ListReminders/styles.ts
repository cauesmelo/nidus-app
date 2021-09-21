import styled from 'styled-components/native';

export const CardReminder = styled.Text`
border:1px solid ${({ theme }) => theme.colors.alternativeLight};
margin-bottom: 30px;
border-radius: 5px;
flex: 1;
justify-content: center;
align-items: center;
`;

export const ReminderContainer = styled.View`
  padding: 16px 20px 10px;
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ReminderTitle = styled.Text`
max-width: 180px;
color: ${({ theme }) => theme.colors.primary};
`;

export const ReminderDate = styled.Text`
color: ${({ theme }) => theme.colors.alternative};
`;

export const Text = styled.Text`
color: ${({ theme }) => theme.colors.primary};
`;