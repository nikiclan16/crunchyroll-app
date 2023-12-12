import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
export const XBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.dispatch(
          CommonActions.navigate({
            name: 'LobbyScreen',
          }),
        );
      }}
      style={{
        marginLeft: 20,
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 8,
      }}>
      <FontAwesome6 name="xmark" size={23} color="#fff" />
    </TouchableOpacity>
  );
};
