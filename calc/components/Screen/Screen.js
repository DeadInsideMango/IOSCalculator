import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import CurrentText from './CurrentText';

 const Screen = () => {
  return (
    <View style={styles.container}>
        <CurrentText/>
    </View>
  )
}

export default Screen;