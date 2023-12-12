import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {COLOR} from '../../src/styles/colors';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../../src/navigation/StackNavigation';

type Props = {
  text: string;
  disabled: boolean;
  LorR: () => Promise<boolean>;
};
export const LRButton = ({text, disabled = true, LorR}: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();

  const navigateToHome = async () => {
    const ok = await LorR();
    if (ok) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'BottomTabsNavigation'}],
        }),
      );
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={navigateToHome}
      activeOpacity={0.8}
      style={disabled ? styles.isDisabled : styles.notDisabled}>
      <Text
        style={{
          fontSize: 14,
          fontWeight: '700',
          color: disabled ? '#59595b' : '#000',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  isDisabled: {
    borderWidth: 2,
    borderColor: '#59595b',
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
  notDisabled: {
    borderWidth: 2,
    borderColor: COLOR.primary,
    backgroundColor: COLOR.primary,
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
});
