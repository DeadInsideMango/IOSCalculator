import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';

const Container = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style='light'/>
        {children}
    </SafeAreaView>
  )
}

export default Container;