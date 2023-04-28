import React from 'react';
import Container from './components/Container/Container';
import Screen from './components/Screen/Screen';
import Keyboard from './components/Keyboard/Keyboard';
import { Context } from './Context/Context';
import { initialState } from './util/util';

export default function App() {

const [state, setState] = React.useState(initialState);

const contextValue = React.useMemo(() => ({ 
  state: state,
  setState: setState
 }));

  return (
    <>
      <Context.Provider value={contextValue}>
        <Container>
          <Screen/>
          <Keyboard/>
        </Container>
      </Context.Provider>
    </>
  );
}