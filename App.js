import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import Footer from './src/telas/Cesta/componentes/Footer'

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
      <Footer/>
    </SafeAreaView>
  );
}
