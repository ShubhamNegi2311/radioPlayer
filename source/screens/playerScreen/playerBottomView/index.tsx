import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

type PlayerBottomViewProps = {};

const PlayerBottomView: React.FC<PlayerBottomViewProps> = props => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 40,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SimpleLineIcons name="microphone" size={20} />
        <Text style={{marginStart: 10, fontSize: 14}}>{'Now Playing'}</Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#000000',
          marginTop: 10,
        }}>
        {'Weird Genius - LATHI (ft. Sara Fajira)'}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          marginTop: 30,
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons
          name={'skip-previous-outline'}
          size={35}
          color={'#000000'}
        />
        <View
          style={{
            height: 70,
            width: 70,
            borderRadius: 99,
            backgroundColor: '#2233EE',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons name={'pause'} size={35} color={'#FFFFFF'} />
        </View>
        <MaterialCommunityIcons
          name={'skip-next-outline'}
          size={35}
          color={'#000000'}
        />
      </View>
    </View>
  );
};

export default PlayerBottomView;
