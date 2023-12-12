import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {COLOR} from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

interface OptionsProps {
  option: string;
  selected?: string;
  switcher?: boolean;
  title?: string;
  arrow?: boolean;
}

interface Props {
  options: OptionsProps;
}

export const AccountOptions = ({options}: Props) => {
  const [isOn, setIsOn] = useState(true);
  const {
    state: {email},
  } = useContext(AuthContext);

  return (
    <View style={{...styles.containerMain, height: options.title ? 115 : 52}}>
      <Text style={styles.title}>{options.title}</Text>
      <View
        style={{
          ...styles.containerSecondary,
          bottom: options.title ? -30 : 0,
        }}>
        <Text style={styles.option}>{options.option}</Text>
        <Text style={styles.selected}>
          {options.option === 'Cambiar Email' ? email : options.selected}
        </Text>
      </View>
      {options.switcher ? (
        <Switch
          trackColor={{true: '#006B77', false: '#353535'}}
          thumbColor={isOn ? '#49EDFF' : '#CACACA'}
          onValueChange={() => setIsOn(!isOn)}
          value={isOn}
          style={{bottom: options.title ? -30 : 0}}
        />
      ) : (
        <Icon
          name="chevron-forward-sharp"
          color={COLOR.grey}
          size={20}
          style={{
            bottom: options.title ? -30 : 0,
            display: options.arrow ? 'none' : 'flex',
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1.5,
    borderBottomColor: '#353535',
  },
  title: {
    color: '#CACACA',
    fontSize: 16,
    fontWeight: '600',
    position: 'absolute',
    top: 30,
  },
  containerSecondary: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  option: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  selected: {
    color: '#CACACA',
    fontWeight: '700',
    fontSize: 12.5,
  },
});
