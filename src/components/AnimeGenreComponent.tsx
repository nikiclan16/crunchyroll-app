import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface AnimeGenresProps {
  image: ImageSourcePropType;
  icon: ImageSourcePropType;
  title: string;
}

interface Props {
  genreInfo: AnimeGenresProps;
}
export const AnimeGenreComponent = ({
  genreInfo: {image, icon, title},
}: Props) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['transparent', '#202020']}
      style={styles.containerMain}>
      <Image source={image} style={styles.backgroundImage} />
      <View style={styles.containerSecondary}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.genre}>{title}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    height: 100,
    width: 190,
    margin: 4,
  },
  backgroundImage: {
    width: '100%',
    zIndex: -1,
    flex: 1,
    backgroundColor: '#3D3D3D',
    opacity: 0.7,
  },
  containerSecondary: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    marginBottom: 5,
  },
  genre: {fontWeight: '700', color: '#fff'},
});
