import React from 'react';
import {Text, View} from 'react-native';
import {CircularProgressWithChild} from 'react-native-circular-progress-indicator';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type PlayerCenterViewProps = {};

const PlayerCenterView: React.FC<PlayerCenterViewProps> = props => {
  return (
    <View style={{width: '100%', paddingHorizontal: 20}}>
      <View style={{width: '100%', alignItems: 'center', marginTop: 35}}>
        <CircularProgressWithChild
          value={30}
          radius={120}
          inActiveStrokeColor={'#1177EEAD'}
          activeStrokeColor={'#1177EE'}
          inActiveStrokeOpacity={0.2}>
          <FastImage
            style={{
              height: '75%',
              width: '75%',
              borderRadius: 99,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            source={{
              uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1600',
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                backgroundColor: '#FFFFFF',
                borderRadius: 99,
                borderWidth: 10,
                borderColor: '#FFFFFF80',
              }}
            />
          </FastImage>
        </CircularProgressWithChild>
      </View>
      <View style={{marginTop: 20, width: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: '#FF4400',
              borderRadius: 99,
            }}
          />
          <Text style={{color: '#000000', fontSize: 12, fontWeight: 'bold'}}>
            {'  LIVE'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#000000',
              fontWeight: 'bold',
              fontSize: 20,
              flex: 0.7,
            }}>
            Elite Street FM
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 0.3,
              justifyContent: 'space-between',
            }}>
            <MaterialCommunityIcon
              name={'tray-arrow-down'}
              size={25}
              color={'#000000'}
            />
            <MaterialCommunityIcon
              name={'share-variant-outline'}
              size={25}
              color={'#000000'}
            />
            <MaterialCommunityIcon
              name={'cards-heart-outline'}
              size={25}
              color={'#000000'}
            />
          </View>
        </View>
        <Text style={{marginTop: 10, fontSize: 12}}>80.4 HZ</Text>
      </View>
    </View>
  );
};

export default PlayerCenterView;
