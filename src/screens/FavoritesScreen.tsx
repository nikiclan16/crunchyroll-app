import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SubtitleOrderFilter} from '../components/SubtitleOrderFilter';
import {recommendations} from '../constants/animeSliders';
import {FavoriteAnime} from '../components/FavoriteAnime';

export const FavoritesScreen = () => {
  return (
    <View style={styles.containerMain}>
      <SubtitleOrderFilter title="Actividad reciente" />
      <FlatList
        data={recommendations}
        renderItem={({item}: any) => <FavoriteAnime animeInfo={item} />}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
      />
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
