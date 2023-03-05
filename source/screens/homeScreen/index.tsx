import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import SpaceView from '../../components/atoms/SpaceView';
import {style} from '../../components/hoc/appLoader/style';
import {SongItemData, TopCarouselDataItem} from '../../dataModel';
import {HomeScreenStack} from '../../navigation/types';
import {FILTER_TYPE} from '../../utils/contants/enumerations';
import HeaderContainer from './headerContainer';
import SongItem from './songItem';
import TopCarousel from './topCarousel';

type HomeScreenProps = NativeStackScreenProps<HomeScreenStack, 'HomeScreen'>;

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const data: SongItemData[] = [
    {name: 'abc', imageUrl: '', isPlaying: true},
    {name: 'abc', imageUrl: '', isPlaying: false},
    {name: 'abc', imageUrl: '', isPlaying: false},
    {name: 'abc', imageUrl: '', isPlaying: false},
    {name: 'abc', imageUrl: '', isPlaying: false},
    {name: 'abc', imageUrl: '', isPlaying: false},
    {name: 'abc', imageUrl: '', isPlaying: false},
  ];

  const topCarouselData: TopCarouselDataItem[] = [
    {name: 'genre', imageUrl: '', type: FILTER_TYPE.GENRE},
    {name: 'countries', imageUrl: '', type: FILTER_TYPE.COUNTRIES},
    {name: 'languages', imageUrl: '', type: FILTER_TYPE.LANGUAGES},
    {name: 'networks', imageUrl: '', type: FILTER_TYPE.NETWORKS},
  ];

  const onSongItemClick = React.useCallback((item: SongItemData) => {
    props.navigation.navigate('PlayerScreen');
  }, []);

  const onCategoryItemClick = React.useCallback((item: TopCarouselDataItem) => {
    props.navigation.navigate('FilterScreen', {
      screenType: item.type,
    });
  }, []);

  return (
    <SafeAreaView style={style.mainContainer}>
      <HeaderContainer />
      <SpaceView height={20} />
      <FlatList
        data={data}
        style={{marginHorizontal: 15}}
        renderItem={({item}) => {
          return <SongItem item={item} onItemClick={onSongItemClick} />;
        }}
        ListHeaderComponent={
          <TopCarousel
            data={topCarouselData}
            onItemClick={onCategoryItemClick}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
