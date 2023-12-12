import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {AuthContext} from '../context/AuthContext';
import {AccountOptions} from '../components/AccountOptions';
import {PhotoAndName} from '../components/PhotoAndName';
import {profileOptions} from '../constants/profileOptions';
import {ScrollView} from 'react-native-gesture-handler';
import {Loader} from '../components/Loader';
import {COLOR} from '../styles/colors';
import {CommonActions, useNavigation} from '@react-navigation/native';

export const AccountScreen = () => {
  const {state, logout} = useContext(AuthContext);
  const {dispatch} = useNavigation();

  const logoutFunction = () => {
    logout().then(() => {
      dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'LobbyScreen'}],
        }),
      );
    });
  };

  if (state.status === 'checking' || state.photoURL === null) {
    return <Loader />;
  }
  return (
    <View style={styles.containerMain}>
      <ScrollView>
        <PhotoAndName name={state.displayName!} uri={state.photoURL!} />
        {profileOptions.map(option => (
          <AccountOptions options={option} key={option.option} />
        ))}
        <TouchableOpacity activeOpacity={1} onPress={logoutFunction}>
          <AccountOptions options={{option: 'Salir', arrow: true}} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginVertical: 30,
          }}>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>
            Versión 3.45.4 (706)
          </Text>
          <Text
            style={{
              color: COLOR.primary,
              fontSize: 15,
              fontWeight: '600',
              marginVertical: 5,
            }}>
            Términos del Servicio
          </Text>
          <Text style={{color: COLOR.primary, fontSize: 15, fontWeight: '600'}}>
            Política de Privacidad
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 12,
  },
});
