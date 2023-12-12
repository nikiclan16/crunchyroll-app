import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const RightHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{marginRight: 20}}>
        <Icon
          name="logo-rss"
          color="#fff"
          size={17}
          style={{position: 'absolute', left: 2, bottom: 5.1}}
        />
        <Icon name="tablet-landscape-outline" color="#fff" size={28} />
      </View>
      <Icon
        name="search-sharp"
        color="#fff"
        size={28}
        style={{marginRight: 10}}
      />
    </View>
  );
};
