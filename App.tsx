import { StatusBar, View } from 'react-native';
import React from 'react';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Ubuntu_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading>
      </AppLoading>
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="Transparent" translucent/>
    <Routes />
    </>
  );
}
