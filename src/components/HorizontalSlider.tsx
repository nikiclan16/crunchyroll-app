import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AnimeData, AnimePoster} from './AnimePoster';

interface Props {
  title?: string;
  animes: AnimeData[];
}
export const HorizontalSlider = ({title, animes}: Props) => {
  return (
    <View style={{marginVertical: 10}}>
      {title && <Text style={styles.title}>{title.toLocaleUpperCase()}</Text>}

      <FlatList
        data={animes}
        renderItem={({item}: any) => <AnimePoster animeInfo={item} />}
        keyExtractor={item => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 12,
    marginVertical: 6,
    color: '#fff',
  },
});
