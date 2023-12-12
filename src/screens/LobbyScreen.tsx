import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';
import {randomImage} from '../utils';
import {COLOR} from '../styles/colors';
import {AccederButton, TryFreeButton} from '../../public/buttons';
import {Crunchyroll} from '../components/Crunchyroll';
import {CommonActions, useNavigation} from '@react-navigation/native';

export const LobbyScreen = () => {
  const {dispatch} = useNavigation();
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <Image
        source={randomImage()}
        style={{objectFit: 'cover', alignSelf: 'center'}}
      />

      <View style={styles.containerContent}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 0.5}}
          colors={['transparent', '#000']}
          style={styles.gradientContainer}>
          <Crunchyroll style={{marginBottom: 15}} />
          <Text style={styles.textWhite}>
            Todo tu anime favorito. Todo en un solo lugar.
          </Text>

          <TryFreeButton />
          <AccederButton />

          <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Text style={{...styles.textBottom, color: '#fff'}}>o </Text>
            <Text
              onPress={() =>
                dispatch(CommonActions.navigate({name: 'RegisterScreen'}))
              }
              style={styles.textBottom}>
              Crear Cuenta
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    height: 350,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  textWhite: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 25,
  },
  textBottom: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.primary,
  },
});
