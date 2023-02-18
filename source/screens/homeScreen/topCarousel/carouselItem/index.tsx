import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TopCarouselDataItem} from '../../../../dataModel';

type CarouselItemProps = {
  item: TopCarouselDataItem;
  onItemClick?: (item: TopCarouselDataItem) => void;
};

const CarouselItem: React.FC<CarouselItemProps> = props => {
  return (
    <FastImage
      source={{
        uri: 'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1600',
      }}
      style={{
        height: 200,
        width: 150,
        borderRadius: 12,
        margin: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          width: '100%',
          paddingBottom: 20,
          paddingHorizontal: 10,
        }}>
        <Text style={{color: '#F5F5F5EE', fontSize: 20, fontWeight: 'bold'}}>
          {props.item.name}
        </Text>
        <Text style={{color: '#F5F5F5AD', fontSize: 16, fontWeight: 'normal'}}>
          24 stations
        </Text>
      </View>
    </FastImage>
  );
};

export default CarouselItem;
