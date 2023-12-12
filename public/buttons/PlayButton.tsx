import React from 'react';
import {Text, View} from 'react-native';
import {COLOR} from '../../src/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export const PlayButton = () => {
  return (
    <View
      style={{
        backgroundColor: COLOR.primary,
        height: 38,
        width: 160,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon name="play-sharp" color="#000" size={24} style={{marginRight: 6}} />
      <Text style={{color: '#000', fontWeight: '700', fontSize: 16}}>
        VER AHORA
      </Text>
    </View>
  );
};
