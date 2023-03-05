import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LanguageData, NetworkData } from '../../dataModel';
import FastImage from 'react-native-fast-image';

type SquareFilterItemProps = {
  item: LanguageData | NetworkData;
  onItemClick: (data: LanguageData | NetworkData) => void;
};

const SquareFilterItem = (props: SquareFilterItemProps) => {
  return (
    <Pressable
      style={{ width: '33%', alignItems: 'center', padding: '3%' }}
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
        style={{ borderRadius: 8, height: 80, width: '100%' }}
      />
      <Text>{props?.item?.name ?? ''}</Text>
      <Text>{'(' + props?.item?.count + ')'}</Text>
    </Pressable>
  );
};

export default SquareFilterItem;

const styles = StyleSheet.create({});
