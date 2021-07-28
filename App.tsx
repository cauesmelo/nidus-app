import React from 'react';
// import AppLoading from 'expo-app-loading';
import { Auth } from './src/pages/Auth';
import { Dashboard } from './src/pages/Dashboard'
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';


import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}

