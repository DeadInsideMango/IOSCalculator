import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Context } from '../../Context/Context';
import Button from '../Buttons/Button';
import Row from './Row';
import { initialState } from '../../util/util';

const Keyboard = () => {

    const { state, setState } = React.useContext(Context);

    const handleTap = (type, value) => {
       switch (type) {
        case 'number':
          if (state.current === '0') {
            setState({
              ...state,
              current: `${parseFloat(value)}`,
            });
          }
          setState({
            ...state,
            current: `${state.current}${value}`
          });
          return;
        case 'clear':
          setState(initialState);
          return;
        case 'posneg':
          setState({
            ...state, 
            current: `${parseFloat(state.current) * -1}`
          });
            return;
        case 'percentage':
          setState({
            ...state,
            current: `${parseFloat(state.current) * 0.01}`
          });
          return;
        case 'operator':
          setState({
            ...state,
            current: '0',
            prev: state.current,
            operator: value
          });
          return;
        case 'equal':
           equal(state.operator);
           return;
        default: 
        setState(state);  
       }
    }

    const equal = (oper) => {
      switch (oper) {
        case '+':
          setState({ 
            ...state,
            current: `${parseFloat(state.prev) + parseFloat(state.current)}`,
            prev: null,
            operator: null
          });
          return;
          case '-':
            setState({ 
              ...state,
              current: `${parseFloat(state.prev) - parseFloat(state.current)}`,
              prev: null,
              operator: null
            });
            return;
          case '*':
            setState({ 
              ...state,
              current: `${parseFloat(state.prev) * parseFloat(state.current)}`,
              prev: null,
              operator: null
            });
            return;
          case '/':
            setState({ 
              ...state,
              current: `${parseFloat(state.prev) / parseFloat(state.current)}`,
              prev: null,
              operator: null
            });
            return;  
      }
    }

  return (
    <View style={styles.container}>
        <Row>
          <Button onPress={() => handleTap('clear')} text='AC' theme='secondary'/>
          <Button onPress={() => handleTap('posneg')} text='+/-' theme='secondary'/>
          <Button onPress={() => handleTap('percentage')} text='%' theme='secondary'/>
          <Button onPress={() => handleTap('operator', '/')} text='/'/>
        </Row>
        <Row>
          <Button onPress={() => handleTap('number', 7)} text='7' theme='accent'/>
          <Button onPress={() => handleTap('number', 8)} text='8' theme='accent'/>
          <Button onPress={() => handleTap('number', 9)} text='9' theme='accent'/>
          <Button onPress={() => handleTap("operator", "*")} text='x'/>
        </Row>
        <Row>
          <Button onPress={() => handleTap('number', 4)} text='4' theme='accent'/>
          <Button onPress={() => handleTap('number', 5)} text='5' theme='accent'/>
          <Button onPress={() => handleTap('number', 6)} text='6' theme='accent'/>
          <Button onPress={() => handleTap('operator', '-')} text='-'/>
        </Row>
        <Row>
          <Button onPress={() => handleTap('number', 1)} text='1' theme='accent'/>
          <Button onPress={() => handleTap('number', 2)} text='2' theme='accent'/>
          <Button onPress={() => handleTap('number', 3)} text='3' theme='accent'/>
          <Button onPress={() => handleTap('operator', '+')} text='+'/>
        </Row>
        <Row>
          <Button onPress={() => handleTap('number', 0)} text='0' size='double' theme='accent'/>
          <Button onPress={() => handleTap('number', '.')} text=',' theme='accent'/>
          <Button onPress={() => handleTap('equal')} text='='/>
        </Row>
    </View>
  )
}

export default Keyboard;