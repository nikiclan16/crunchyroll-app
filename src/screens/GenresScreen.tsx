import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {animeGenres} from '../constants/animeGenres';
import {AnimeGenreComponent} from '../components/AnimeGenreComponent';

export const GenresScreen = () => {
  return (
    <View style={styles.containerMain}>
      <FlatList
        style={{paddingTop: 10}}
        data={animeGenres}
        keyExtractor={item => item.title}
        renderItem={({item}) => <AnimeGenreComponent genreInfo={item} />}
        horizontal={false}
        numColumns={2}
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
