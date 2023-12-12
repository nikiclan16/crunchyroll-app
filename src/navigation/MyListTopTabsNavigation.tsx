import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FavoritesScreen} from '../screens/FavoritesScreen';
import {CrunchyListScreen} from '../screens/CrunchyListScreen';
import {HistoryScreen} from '../screens/HistoryScreen';
import {OffLineScreen} from '../screens/OffLineScreen';
import {COLOR} from '../styles/colors';

const Tab = createMaterialTopTabNavigator();

export const MyListTopTabsNavigation = () => {
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
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{title: 'FAVORITOS'}}
      />
      <Tab.Screen
        name="CrunchyListScreen"
        component={CrunchyListScreen}
        options={{
          title: 'CRUNCHYLISTAS',
        }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{title: 'HISTORIAL'}}
      />
      <Tab.Screen
        name="OffLineScreen"
        component={OffLineScreen}
        options={{title: 'OFFLINE'}}
      />
    </Tab.Navigator>
  );
};
