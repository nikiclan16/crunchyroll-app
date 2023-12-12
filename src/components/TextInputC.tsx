import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {ImageStyle, StyleProp, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../styles/colors';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface Props {
  label: string;
  style?: StyleProp<ImageStyle>;
  autoFocus?: boolean;
  password?: boolean;
  text: string;
  field: string;
  onInputChange: any;
}
export const TextInputC = ({
  label,
  style = {},
  autoFocus = false,
  password = false,
  text,
  field,
  onInputChange,
}: Props) => {
  const [showPassword, setShowPassword] = useState(true);

  return !password ? (
    <TextInput
      value={text as string}
      onChangeText={text => onInputChange(text, field)}
      label={<Text style={{color: '#fff', fontWeight: '500'}}>{label}</Text>}
      style={{...styles.inputStyle, ...(style as any)}}
      activeUnderlineColor={COLOR.primary}
      underlineColor="#59595b"
      underlineStyle={{height: 1}}
      autoFocus={autoFocus}
      contentStyle={{
        color: '#fff',
        fontWeight: '500',
      }}
    />
  ) : (
    <View style={{width: '100%'}}>
      <TextInput
        value={text as string}
        onChangeText={text => onInputChange(text, field)}
        secureTextEntry={showPassword}
        label={<Text style={{color: '#fff', fontWeight: '500'}}>{label}</Text>}
        style={{...styles.inputStyle, ...(style as any)}}
        activeUnderlineColor={COLOR.primary}
        underlineColor="#59595b"
        underlineStyle={{height: 1}}
        autoFocus={autoFocus}
        contentStyle={{
          color: '#fff',
          fontWeight: '500',
        }}
      />
      <FontAwesome6
        onPress={() => setShowPassword(!showPassword)}
        name={showPassword ? 'eye' : 'eye-slash'}
        size={20}
        color="white"
        style={{position: 'absolute', right: 10, top: '25%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    backgroundColor: '#1C1C1C',
    height: 60,
    marginBottom: 15,
  },
});
