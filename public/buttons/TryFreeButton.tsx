import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLOR} from '../../src/styles/colors';

export const TryFreeButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...stylesButtons.buttons,
        backgroundColor: '#fab818',
        marginBottom: 12,
      }}>
      <FontAwesome6
        name="crown"
        size={16}
        style={{color: '#000', marginRight: 5}}
      />
      <Text style={{...stylesButtons.textButtons, color: '#000'}}>
        EXPLORAR PRUEBA GRATUITA
      </Text>
    </TouchableOpacity>
  );
};

export const stylesButtons = StyleSheet.create({
  buttons: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
  textButtons: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.primary,
  },
});
