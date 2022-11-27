import React from 'react';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import {Tab,Text, TabView} from '@rneui/themed';

export default function Footer(){
  return(
    <View style = {{ background: '#99c93e'}}>
      <Text style = {{marginBottom: 10,
            display: 'flex',
            marginTop: 15,
            fontSize: 18,
            justifyContent: 'center',
            fontWeight: 'bold'}}> Irmaos Benassi </Text>

      <Text style = {{marginBottom: 10,
            display: 'flex',
            marginTop: 0,
            fontSize: 14,
            justifyContent: 'center',}}> Av Antonio Simao Firjan, 2800 </Text>

      <Text style = {{marginBottom: 10,
            display: 'flex',
            marginTop: 5,
            fontSize: 14,
            justifyContent: 'center',
            fontWeight: 'bold'}}> 202203249592  © </Text>
    </View>
  )
}