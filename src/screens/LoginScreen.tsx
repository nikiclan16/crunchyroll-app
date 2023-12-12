import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Crunchyroll} from '../components/Crunchyroll';

import {TextInputC} from '../components/TextInputC';
import {COLOR} from '../styles/colors';
import {useForm} from '../hooks/useForm';
import {LRButton} from '../../public/buttons/LRButton';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import {Loader} from '../components/Loader';

export const LoginScreen = () => {
  const {dispatch} = useNavigation();

  const {email, password, onChange} = useForm({
    email: '',
    password: '',
  });

  const {login, state} = useContext(AuthContext);

  const isDisabled = email.length > 3 && password.length > 3;

  if (state.status === 'checking') {
    return <Loader />;
  }

  return (
    <View style={styles.containerMain}>
      <Crunchyroll style={{marginBottom: 30}} />
      <TextInputC
        onInputChange={onChange}
        text={email}
        field="email"
        label="Email o nombre de usuario"
        autoFocus
      />
      <TextInputC
        text={password}
        onInputChange={onChange}
        field="password"
        label="Contraseña"
        password
      />

      <Text style={styles.conditions}>
        Al usar tu cuenta accedes a nuestros
        <Text style={{color: COLOR.primary}}> Términos</Text> y
        <Text style={{color: COLOR.primary}}> Política de Privacidad</Text> y
        confirmas que tienes 16 años o más.
      </Text>
      <LRButton
        text="ACCEDER"
        disabled={!isDisabled}
        LorR={() => login(email, password)}
      />
      <Text style={styles.textFooter}>
        <Text style={{color: COLOR.primary}}>¿Olvidaste tu contraseña?</Text> |
        <Text
          onPress={() =>
            dispatch(CommonActions.navigate({name: 'RegisterScreen'}))
          }
          style={{color: COLOR.primary}}>
          {' '}
          Crear Cuenta
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conditions: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 20,
  },
  textFooter: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 25,
    marginBottom: 30,
  },
});
