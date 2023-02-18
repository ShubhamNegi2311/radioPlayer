import React from 'react';
import {Pressable, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SongItemData} from '../../../dataModel';

type SongItemProps = {
  item: SongItemData;
  onItemClick: (item: SongItemData) => void;
};

const SongItem: React.FC<SongItemProps> = props => {
  return (
    <Pressable
      onPress={() => {
        props.onItemClick(props.item);
      }}
      style={{
        height: 85,
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#E5E5E5',
        marginVertical: 5,
      }}>
      <View
        style={{
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <FastImage
          style={{height: 60, width: 60, borderRadius: 12}}
          source={{
            uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1600',
          }}
        />
        <View
          style={{
            flex: 1,
            height: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1, paddingStart: 20}}>
            <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
              Elite Street FM
            </Text>
            <Text>The Radio for young people</Text>
          </View>
          <MaterialCommunityIcons
            name={props.item.isPlaying ? 'pause' : 'play'}
            size={40}
            color="#B5B5B5"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default SongItem;
