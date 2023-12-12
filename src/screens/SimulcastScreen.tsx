import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AnimePoster} from '../components/AnimePoster';
import {simulcastOtono} from '../constants/animeSliders';
import Icon from 'react-native-vector-icons/Ionicons';

export const SimulcastScreen = () => {
  return (
    <View style={styles.containerMain}>
      <View
        style={{
          flexDirection: 'row',
          width: 110,
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 18,
          marginTop: 8,
          marginBottom: 18,
        }}>
        <Icon name="caret-down-sharp" color="#fff" style={{top: 1}} />
        <Text style={styles.title}>Otoño 2023</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <FlatList
          data={simulcastOtono}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <AnimePoster
              animeInfo={item}
              stylePoster={{width: 175, height: 265}}
              styleContainer={styles.containerPoster}
              mbTitle={8}
            />
          )}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 12,
  },
  containerPoster: {
    width: 175,
    marginBottom: 10,
    marginRight: 4,
    marginLeft: 4,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
