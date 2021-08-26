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
`;

export const ReminderTitle = styled.Text`
max-width: 180px;
`;

export const ReminderDate = styled.Text`
color: ${({ theme }) => theme.colors.alternative};
`;