import React from 'react';
import {Image, Text, View} from 'react-native';

export const NoDisponible = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../assets/mantenimiento.png')}
        width={100}
        height={50}
      />
      <Text
        style={{color: '#fff', fontSize: 20, fontWeight: '700', marginTop: 20}}>
        No disponible
      </Text>
    </View>
  );
};
