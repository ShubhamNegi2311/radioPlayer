import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CountryData, GenreData } from '../../dataModel';
import FastImage from 'react-native-fast-image';

type CircleFilterItemProps = {
  item: GenreData | CountryData;
  onItemClick: (data: GenreData | CountryData) => void;
};

const CircleFilterItem = (props: CircleFilterItemProps) => {
  return (
    <Pressable
      style={{ width: '25%', alignItems: 'center', padding: '3%' }}
      onPress={() => {
        props.onItemClick(props.item);
      }}>
      <FastImage
        source={{
          uri:
            props.item.imageUrl?.length > 0
              ? props.item.imageUrl
              : 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1600',
        }}
        style={{ borderRadius: 99, height: 75, width: 75 }}
      />
      <Text>{props?.item?.name ?? ''}</Text>
      <Text>{'(' + props?.item?.count + ')'}</Text>
    </Pressable>
  );
};

export default CircleFilterItem;

const styles = StyleSheet.create({});
