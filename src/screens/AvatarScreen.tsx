import React, {useContext} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLOR} from '../styles/colors';
import {AvatarSlider} from '../components/AvatarSlider';
import {
  chainsawManAvatars,
  crunchyrollAvatars,
  jujutsuAvatars,
  onePieceAvatars,
  onePieceG5Avatars,
} from '../constants/avatars';
import {CommonActions, useNavigation} from '@react-navigation/native';

export const AvatarScreen = () => {
  const {
    state: {displayName, photoURL, avatarSelected},
    changeAvatarSelected,
    changeAvatar,
  } = useContext(AuthContext);

  const {dispatch} = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View
        style={{
          ...styles.containerOptions,
          borderBottomColor: COLOR.grey,
        }}>
        <FontAwesome6
          name="xmark"
          size={23}
          color="#fff"
          onPress={() => {
            dispatch(CommonActions.goBack());
            changeAvatarSelected(photoURL!);
          }}
        />
        <View style={{left: 34, alignItems: 'center'}}>
          <Image
            source={{
              uri:
                avatarSelected === 'not-selected' ? photoURL! : avatarSelected,
            }}
            style={{height: 50, width: 50, borderRadius: 50}}
          />
          <Text style={styles.name}>{displayName}</Text>
        </View>
        <Text
          style={{
            color:
              avatarSelected === 'not-selected' || avatarSelected === photoURL
                ? '#6B6B6B'
                : COLOR.primary,
            fontWeight: '700',
            fontSize: 16,
          }}
          disabled={
            avatarSelected === 'not-selected' || avatarSelected === photoURL
              ? true
              : false
          }
          onPress={() => {
            dispatch(CommonActions.goBack());
            changeAvatar(avatarSelected);
          }}>
          GUARDAR
        </Text>
      </View>

      <ScrollView>
        <AvatarSlider title="Crunchyroll" avatarsData={crunchyrollAvatars} />
        <AvatarSlider title="One Piece" avatarsData={onePieceAvatars} />
        <AvatarSlider
          title="One Piece: Gear Five"
          avatarsData={onePieceG5Avatars}
        />
        <AvatarSlider title="JUJUTSU KAISEN" avatarsData={jujutsuAvatars} />
        <AvatarSlider title="Chainsaw Man" avatarsData={chainsawManAvatars} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOptions: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 15,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 0.5,
  },
  name: {
    color: '#fff',
    marginTop: 4,
    fontSize: 16.5,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
});
