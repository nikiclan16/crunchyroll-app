import React, {useContext} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLOR} from '../styles/colors';
import {AuthContext} from '../context/AuthContext';

interface AvatarProps {
  uri: string;
}

interface SliderProps {
  title: string;
  avatarsData: AvatarProps[];
}

export const AvatarSlider = ({title, avatarsData}: SliderProps) => {
  const {
    state: {avatarSelected, photoURL},
    changeAvatarSelected,
  } = useContext(AuthContext);

  return (
    <View style={{marginTop: 20}}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={avatarsData}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => changeAvatarSelected(item.uri)}>
            <Image
              source={{uri: item.uri}}
              style={{
                ...styles.image,
                borderWidth: photoURL === item.uri ? 4 : 0,
                borderColor:
                  photoURL === item.uri ? COLOR.primary : 'transparent',
              }}
            />
            <View
              style={{
                ...styles.check,
                display: avatarSelected === item.uri ? 'flex' : 'none',
              }}>
              <FontAwesome6
                name="circle-check"
                color={COLOR.primary}
                solid
                size={20}
              />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.uri}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 12,
    marginBottom: 15,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 12,
    marginRight: 10,
  },
  check: {
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#000',
    borderRadius: 50,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
    right: 10,
    zIndex: 999,
  },
});
