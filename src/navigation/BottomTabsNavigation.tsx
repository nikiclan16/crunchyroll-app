import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLOR} from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {AccountScreen, HomeScreen, SimulcastScreen} from '../screens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RightHeader} from '../components/RightHeader';
import {Crunchyroll} from '../components/Crunchyroll';
import {MyListTopTabsNavigation} from './MyListTopTabsNavigation';
import {ExplorerTopTabsNavigation} from './ExplorerTopTabsNavigation';
import {Image, StyleSheet, ActivityIndicator} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  const {top} = useSafeAreaInsets();

  const {
    state: {photoURL, status},
  } = useContext(AuthContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => <RightHeader />,
        headerStyle: {
          backgroundColor: '#000',
          height: 50 + top,
          elevation: 0,
        },
        headerRightContainerStyle: {
          justifyContent: 'center',
        },
        headerTitleContainerStyle: {flex: 1, justifyContent: 'center'},
        headerTitleStyle: {color: '#fff'},
        tabBarActiveTintColor: COLOR.primary,
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          backgroundColor: '#212F3C',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginBottom: 8,
        },
        tabBarIcon: props => {
          let iconName: string = '';
          switch (route.name) {
            case 'HomeScreen':
              iconName = 'home-outline';
              break;

            case 'MyListScreen':
              iconName = 'bookmark-outline';
              break;

            case 'ExplorerScreen':
              iconName = 'qr-code-outline';
              break;

            case 'SimulcastScreen':
              iconName = 'star-outline';
              break;

            case 'AccountScreen':
              iconName = 'person-circle-outline';
              break;
          }
          return <Icon name={iconName} size={26} color={props.color} />;
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          title: 'Inicio',
          headerTitleStyle: {display: 'none'},
          headerLeft: () => <Crunchyroll style={{height: 40, width: 160}} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="MyListScreen"
        options={{title: 'Mis listas'}}
        component={MyListTopTabsNavigation}
      />
      <Tab.Screen
        name="ExplorerScreen"
        options={{title: 'Explorar'}}
        component={ExplorerTopTabsNavigation}
      />
      <Tab.Screen
        name="SimulcastScreen"
        options={{
          title: 'Simulcast',
          headerTitle: 'Temporada de simulcasts',
          headerTitleStyle: {width: 240, color: 'white'},
          headerStyle: {...styles.headerBorderBottom, height: 50 + top},
        }}
        component={SimulcastScreen}
      />
      <Tab.Screen
        name="AccountScreen"
        options={{
          title: 'Cuenta',
          tabBarIcon: () => {
            return photoURL === null || status === 'checking' ? (
              <ActivityIndicator size={20} color={COLOR.primary} />
            ) : (
              <Image
                source={{uri: photoURL}}
                style={{height: 30, width: 30, borderRadius: 25}}
              />
            );
          },
          headerStyle: {...styles.headerBorderBottom, height: 50 + top},
        }}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerBorderBottom: {
    backgroundColor: '#000',
    borderBottomWidth: 1.5,
    borderBottomColor: '#353535',
  },
});
