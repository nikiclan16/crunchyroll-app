import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

interface Props {
  style?: StyleProp<ImageStyle>;
}

export const Crunchyroll = ({style = {}}: Props) => {
  return (
    <Image
      source={require('../assets/CrunchyrollLogo.png')}
      style={{width: 220, height: 40, ...(style as any)}}
    />
  );
};
