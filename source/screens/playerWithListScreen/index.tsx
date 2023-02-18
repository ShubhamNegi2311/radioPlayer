import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {CircularProgressWithChild} from 'react-native-circular-progress-indicator';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DividerView from '../../components/atoms/DividerView';
import SpaceView from '../../components/atoms/SpaceView';
import {SongDetailsData} from '../../dataModel';
import {HomeScreenStack} from '../../navigation/types';
import PlayerHeader from '../playerScreen/playerHeader';
import TrackItem from './trackItem';

type PlayerWithListScreenProps = NativeStackScreenProps<
  HomeScreenStack,
  'PlayerWithListScreen'
>;

const PlayerWithListScreen: React.FC<PlayerWithListScreenProps> = props => {
  const data: SongDetailsData[] = [
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
    {name: 'Bad Habits', singer: 'Ed Sheeran', trackLength: '09:37'},
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E9E9E9'}}>
      <PlayerHeader />
      <View style={{width: '100%', alignItems: 'center'}}>
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
            onPress={() => {}}
          />
          <CircularProgressWithChild
            value={30}
            radius={60}
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
              }}
            />
          </CircularProgressWithChild>
          <MaterialCommunityIcons
            name={'skip-next-outline'}
            size={35}
            color={'#000000'}
          />
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: '#FF4400',
              borderRadius: 99,
            }}
          />
          <Text
            style={{
              color: '#000000',
              fontSize: 12,
              fontWeight: 'bold',
            }}>
            {'  LIVE'}
          </Text>
        </View>
        <Text
          style={{
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 10,
          }}>
          Elite Street FM
        </Text>
        <Text style={{marginTop: 10, fontSize: 12}}>80.4 HZ</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          height: '60%',
          width: '100%',
          backgroundColor: '#FFFFFF',
          bottom: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 75,
            backgroundColor: '#CCCCCC',
            height: 8,
            borderRadius: 12,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            color: '#CCCCCC',
            letterSpacing: 2,
            marginTop: 10,
          }}>
          TRACK DAY LIST
        </Text>
        <SpaceView height={20} />
        <DividerView height={1} />
        <SpaceView height={20} />
        <FlatList
          style={{width: '100%'}}
          data={data}
          renderItem={({item}) => {
            return <TrackItem item={item} />;
          }}
          showsVerticalScrollIndicator={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default PlayerWithListScreen;
