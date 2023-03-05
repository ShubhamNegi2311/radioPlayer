import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreenStack } from '../../navigation/types';
import {
  CountryData,
  GenreData,
  LanguageData,
  NetworkData,
} from '../../dataModel';
import { FILTER_TYPE } from '../../utils/contants/enumerations';
import {
  countriesList,
  genreList,
  languageList,
  networksList,
} from '../../utils/contants/AppConstants';
import SquareFilterItem from './squareFilterItem';
import CircleFilterItem from './circleFilterItem';

type FilterScreenProps = NativeStackScreenProps<
  HomeScreenStack,
  'FilterScreen'
>;

const FilterScreen: React.FC<FilterScreenProps> = props => {
  const { screenType } = props.route.params;
  const [filterData, setFilterData] = React.useState<
    GenreData[] | LanguageData[] | CountryData[] | NetworkData[]
  >([]);
  const [searchText, setSearchText] = React.useState<string>('');

  React.useEffect(() => {
    if (screenType === FILTER_TYPE.GENRE) {
      let filteredData = genreList.filter(element => {
        return element.name.includes(searchText);
      });
      setFilterData(filteredData);
    } else if (screenType === FILTER_TYPE.COUNTRIES) {
      let filteredData = countriesList.filter(element => {
        return element.name.includes(searchText);
      });
      setFilterData(filteredData);
    } else if (screenType === FILTER_TYPE.LANGUAGES) {
      let filteredData = languageList.filter(element => {
        return element.name.includes(searchText);
      });
      setFilterData(filteredData);
    } else if (screenType === FILTER_TYPE.NETWORKS) {
      let filteredData = networksList.filter(element => {
        return element.name.includes(searchText);
      });
      setFilterData(filteredData);
    }
  }, [searchText]);

  React.useEffect(() => {
    if (screenType === FILTER_TYPE.GENRE) {
      setFilterData(genreList);
    } else if (screenType === FILTER_TYPE.COUNTRIES) {
      setFilterData(countriesList);
    } else if (screenType === FILTER_TYPE.LANGUAGES) {
      setFilterData(languageList);
    } else if (screenType === FILTER_TYPE.NETWORKS) {
      setFilterData(networksList);
    }
  }, []);

  const circleClickHandler = React.useCallback(
    (item: GenreData | CountryData) => {
      console.log('ITEM CLICKED');
    },
    [],
  );

  const squareClickHandler = React.useCallback(
    (item: NetworkData | LanguageData) => {
      console.log('ITEM CLICKED');
    },
    [],
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center' }}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <MaterialCommunityIcons
          size={40}
          name="chevron-left"
          color={'#000000'}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            fontWeight: 'bold',
            marginStart: 20,
          }}>
          {screenType}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          backgroundColor: '#00000080',
          borderRadius: 20,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginTop: 15,
        }}>
        <MaterialCommunityIcons name="magnify" size={25} color={'#F2F2F280'} />
        <TextInput
          onChangeText={setSearchText}
          style={{ width: '90%', color: '#FFFFFF' }}
          placeholder={'Search ' + screenType}
          placeholderTextColor={'#F2F2F280'}
        />
      </View>
      <FlatList
        data={filterData}
        renderItem={({ item }) => {
          if (
            screenType === FILTER_TYPE.LANGUAGES ||
            screenType === FILTER_TYPE.NETWORKS
          ) {
            return (
              <SquareFilterItem item={item} onItemClick={squareClickHandler} />
            );
          } else {
            return (
              <CircleFilterItem item={item} onItemClick={circleClickHandler} />
            );
          }
        }}
        numColumns={
          screenType === FILTER_TYPE.LANGUAGES ||
          screenType === FILTER_TYPE.NETWORKS
            ? 3
            : 4
        }
        style={{
          width: '95%',
        }}
      />
    </SafeAreaView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});
