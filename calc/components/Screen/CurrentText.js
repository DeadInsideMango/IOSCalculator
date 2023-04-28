import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Context } from '../../Context/Context';

const CurrentText = () => {

  const { state } = React.useContext(Context);

  return (
    <View style={styles.textWidth}>
      <Text style={styles.text}>
        {parseFloat(state.current).toLocaleString()}
      </Text>
    </View>
  )
}

export default CurrentText;