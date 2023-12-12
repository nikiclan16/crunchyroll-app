import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  title: string;
}

export const SubtitleOrderFilter = ({title}: Props) => {
  return (
    <View style={styles.containerMain}>
      <Text style={styles.title}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Icon name="filter-outline" color="#fff" size={30} />
        <Icon
          name="options-outline"
          color="#fff"
          size={30}
          style={{marginLeft: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'row',
    marginVertical: 6,
    marginBottom: 12,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
