import React from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
} from 'react-native';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../styles/colors';

export interface AnimeData {
  source: ImageSourcePropType;
  title: string;
  audio: 'Dob | Sub' | 'Subtitulado' | 'Japonés' | 'Dob English | Sub';
}

interface Props {
  animeInfo: AnimeData;
  stylePoster?: StyleProp<ImageStyle>;
  styleContainer?: StyleProp<ImageStyle>;
  mbTitle?: number;
}

export const AnimePoster = ({
  animeInfo,
  stylePoster,
  styleContainer,
  mbTitle,
}: Props) => {
  return (
    <View style={{...styles.containerMain, ...(styleContainer as any)}}>
      <Image
        source={animeInfo.source}
        style={{width: 160, height: 250, ...(stylePoster as any)}}
      />
      <Text style={{...styles.title, marginBottom: mbTitle}}>
        {animeInfo.title}
      </Text>
      <View style={styles.containerFooter}>
        <Text style={styles.audio}>{animeInfo.audio}</Text>
        <Icon name="ellipsis-vertical" color={COLOR.grey} size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    width: 160,
    marginLeft: 12,
    marginRight: -4,
  },
  title: {
    marginVertical: 5,
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 5,
  },
  audio: {
    color: '#A8A8A8',
    fontSize: 14,
    fontWeight: '600',
  },
});
