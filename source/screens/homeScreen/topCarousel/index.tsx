import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {TopCarouselDataItem} from '../../../dataModel';
import CarouselItem from './carouselItem';

type TopCarouselProps = {
  data: TopCarouselDataItem[];
};

const TopCarousel: React.FC<TopCarouselProps> = props => {
  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={({item}) => {
          return <CarouselItem item={item} />;
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Text
        style={{
          color: '#000000',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 30,
          marginBottom: 20,
        }}>
        Latest Selection
      </Text>
    </View>
  );
};

export default TopCarousel;
