import 'react-native-gesture-handler';
import React from 'react';
import {StackNavigation} from './src/navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </AuthProvider>
    </PaperProvider>
  );
};

export default App;
