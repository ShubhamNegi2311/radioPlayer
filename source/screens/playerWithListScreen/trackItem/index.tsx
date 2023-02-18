import React from 'react';
import {Text, View} from 'react-native';
import {SongDetailsData} from '../../../dataModel';
import {style} from './style';

type TrackItemProps = {
  item: SongDetailsData;
};

const TrackItem: React.FC<TrackItemProps> = props => {
  return (
    <View style={style.itemContainer}>
      <View style={style.itemInnerContainer}>
        <Text style={style.songNameText}>{props.item.name}</Text>
        <Text style={style.songSingerText}>{props.item.singer}</Text>
      </View>
      <Text style={style.songTrackLengthText}>{props.item.trackLength}</Text>
    </View>
  );
};

export default TrackItem;
