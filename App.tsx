import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { AppRoutes } from './src/routes/app.routes';
import { ThemeContextProvider } from './ThemeContext';

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
  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  );
}

