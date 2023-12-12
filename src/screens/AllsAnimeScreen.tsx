import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SubtitleOrderFilter} from '../components/SubtitleOrderFilter';
import {populares} from '../constants/animeSliders';
import {AnimePoster} from '../components/AnimePoster';

export const AllsAnimeScreen = () => {
  return (
    <View style={styles.containerMain}>
      <SubtitleOrderFilter title="Popular" />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <FlatList
          data={populares}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <AnimePoster
              animeInfo={item}
              stylePoster={{width: 175, height: 265}}
              styleContainer={styles.containerPoster}
              mbTitle={8}
            />
          )}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 12,
  },
  containerPoster: {
    width: 175,
    marginBottom: 10,
    marginRight: 4,
    marginLeft: 4,
  },
});
