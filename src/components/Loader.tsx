import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native';
import {COLOR} from '../styles/colors';

export const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size={40} color={COLOR.primary} />
    </View>
  );
};
