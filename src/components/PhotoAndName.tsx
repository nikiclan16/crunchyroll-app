import {CommonActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

interface Props {
  uri: string;
  name: string;
}

export const PhotoAndName = ({uri, name}: Props) => {
  const {dispatch} = useNavigation();

  return (
    <View style={styles.containerIconName}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          dispatch(CommonActions.navigate({name: 'AvatarScreen'}))
        }>
        <Image source={{uri: uri}} style={styles.photoURL} />
        <View style={styles.containerIcon}>
          <FontAwesome6 name="pencil" color="#fff" size={16} />
        </View>
      </TouchableOpacity>

      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerIconName: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    marginVertical: 10,
  },
  photoURL: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginRight: 16,
  },
  containerIcon: {
    position: 'absolute',
    zIndex: 999,
    alignSelf: 'flex-end',
    bottom: 1,
    right: 12,
    backgroundColor: '#545454',
    borderRadius: 50,
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  name: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
