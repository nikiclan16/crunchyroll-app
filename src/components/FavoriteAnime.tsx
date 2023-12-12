import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AnimeData} from './AnimePoster';

interface Props {
  animeInfo: AnimeData;
}

export const FavoriteAnime = ({animeInfo: {audio, source, title}}: Props) => {
  const [isFavorite, setIsFavorite] = useState(true);
  return (
    <View style={{flexDirection: 'row', width: '100%', marginBottom: 10}}>
      <Image source={source} style={{height: 150, width: 100}} />
      <View style={{marginLeft: 20, flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.audio}>Comenzar a ver: S1 E1</Text>
        <View style={styles.containerAI}>
          <Text style={styles.audio}>{audio}</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name={isFavorite ? 'heart' : 'heart-outline'}
              color="#fff"
              size={25}
              style={{marginRight: 15}}
              onPress={() => setIsFavorite(!isFavorite)}
            />
            <Icon name="ellipsis-vertical" color="#fff" size={25} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 28,
    marginBottom: 3,
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  audio: {
    color: '#A8A8A8',
    fontSize: 14,
    fontWeight: '600',
  },
  containerAI: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
  },
});
