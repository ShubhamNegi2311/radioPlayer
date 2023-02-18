import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {HomeScreenStack} from '../../navigation/types';
import PlayerBottomView from './playerBottomView';
import PlayerCenterView from './playerCenterView';
import PlayerHeader from './playerHeader';
import {style} from './style';

type PlayerScreenProps = NativeStackScreenProps<
  HomeScreenStack,
  'PlayerScreen'
>;

const PlayerScreen: React.FC<PlayerScreenProps> = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E9E9E9'}}>
      <PlayerHeader />
      <PlayerCenterView />
      <PlayerBottomView />
      <Pressable
        onPress={() => {
          props.navigation.navigate('PlayerWithListScreen');
        }}
        style={style.bottomSheetContainer}>
        <View style={style.bottomSheetDragHead} />
        <Text style={style.trackDayText}>TRACK DAY LIST</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PlayerScreen;
