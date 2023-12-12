import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LobbyScreen} from '../screens/LobbyScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {StyleSheet} from 'react-native';
import {XBackButton} from '../../public/buttons/XBackButton';
import {RegisterScreen} from '../screens/RegisterScreen';
import {BottomTabsNavigation} from './BottomTabsNavigation';
import {AvatarScreen} from '../screens/AvatarScreen';

export type RootStackParams = {
  LobbyScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  BottomTabsNavigation: undefined;
  AvatarScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LobbyScreen" component={LobbyScreen} />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: true,
          headerLeft: () => <XBackButton />,
          headerTitle: 'Acceder',
          headerTitleAlign: 'center',
          headerTitleStyle: {...styles.loginTitle},
          headerStyle: {...styles.loginHeader},
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: true,
          headerLeft: () => <XBackButton />,
          headerTitle: 'Crear Cuenta',
          headerTitleAlign: 'center',
          headerTitleStyle: {...styles.loginTitle},
          headerStyle: {...styles.loginHeader},
        }}
      />
      <Stack.Screen
        name="BottomTabsNavigation"
        component={BottomTabsNavigation}
      />
      <Stack.Screen name="AvatarScreen" component={AvatarScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loginTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  loginHeader: {
    backgroundColor: '#000',
    elevation: 0,
  },
});
