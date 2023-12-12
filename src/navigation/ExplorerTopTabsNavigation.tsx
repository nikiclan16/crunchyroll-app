import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {OffLineScreen} from '../screens/OffLineScreen';
import {COLOR} from '../styles/colors';
import {AllsAnimeScreen} from '../screens/AllsAnimeScreen';
import {SimulcastScreen} from '../screens';
import {GenresScreen} from '../screens/GenresScreen';

const Tab = createMaterialTopTabNavigator();

export const ExplorerTopTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarItemStyle: {width: 'auto', paddingHorizontal: 18},
        tabBarIndicatorStyle: {
          backgroundColor: COLOR.primary,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
        tabBarInactiveTintColor: '#A8A8A8',
        tabBarActiveTintColor: '#FFF',
      }}>
      <Tab.Screen
        name="AllsAnimeScreen"
        component={AllsAnimeScreen}
        options={{title: 'TODO EL ANIME'}}
      />
      <Tab.Screen
        name="SimulcastScreen"
        component={SimulcastScreen}
        options={{
          title: 'SIMULCAST',
        }}
      />
      <Tab.Screen
        name="GenresScreen"
        component={GenresScreen}
        options={{title: 'GÉNEROS DE ANIME'}}
      />
      <Tab.Screen
        name="OffLineScreen"
        component={OffLineScreen}
        options={{title: 'MÚSICA'}}
      />
    </Tab.Navigator>
  );
};
