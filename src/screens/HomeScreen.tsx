import React, {useContext} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PlayButton} from '../../public/buttons/PlayButton';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {
  animesFree,
  populares,
  recommendations,
  simulcastOtono,
} from '../constants/animeSliders';
import {Loader} from '../components/Loader';
import {AuthContext} from '../context/AuthContext';

export const HomeScreen = () => {
  const {
    state: {status},
  } = useContext(AuthContext);

  if (status === 'checking') {
    return <Loader />;
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#000" />
      <Image
        source={require('../assets/shangri.jpg')}
        style={{position: 'absolute', top: 0, zIndex: -1}}
      />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={{height: 400, marginTop: 110}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.9}}
            colors={['transparent', '#000']}
            style={styles.headerContainer}>
            <Text style={styles.headerTitle}>SHANGRI-LA FRONTIER</Text>
            <Text
              style={{...styles.headerTitle, color: '#e2e2e2', fontSize: 13}}>
              Dob | Sub
            </Text>
            <Text style={styles.headerDescription}>
              "¿Cuándo fue la última vez que jugué un juego que no fuera una
              basura?" Este es un mundo en el futuro cercano donde los juegos
              que usan pantallas se consideran retro,...
            </Text>

            <PlayButton />
          </LinearGradient>
        </View>
        <View
          style={{
            backgroundColor: '#000',
            height: 1460,
          }}>
          <View style={{height: 10}} />
          <HorizontalSlider
            animes={recommendations}
            title="Nuestras Recomendaciones"
          />
          <HorizontalSlider
            animes={animesFree}
            title="¡anime que puedes mirar gratis!"
          />
          <HorizontalSlider animes={populares} title="lo más popular" />
          <HorizontalSlider
            animes={simulcastOtono}
            title="¡nuevos simulcast de otoño 2023!"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'flex-end',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 8,
  },
  headerDescription: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 20,
  },
});
