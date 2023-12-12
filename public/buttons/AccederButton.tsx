import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {COLOR} from '../../src/styles/colors';
import {stylesButtons} from './TryFreeButton';
import {CommonActions, useNavigation} from '@react-navigation/native';

export const AccederButton = () => {
  const {dispatch} = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        dispatch(
          CommonActions.navigate({
            name: 'LoginScreen',
          }),
        )
      }
      activeOpacity={0.8}
      style={{
        ...stylesButtons.buttons,
        borderWidth: 2,
        borderColor: COLOR.primary,
      }}>
      <Text style={[stylesButtons.textButtons]}>ACCEDER</Text>
    </TouchableOpacity>
  );
};
