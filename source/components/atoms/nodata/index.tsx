import React from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PRIMARY_LIGHT } from '../../../../styling/colors';
import { style } from './style';

type NoDataProps = {};

const NoData: React.FC<NoDataProps> = (props) => {
  return (
    <View style={style.container}>
      <MaterialCommunityIcons
        size={62}
        name='file-document'
        color={PRIMARY_LIGHT}
      />
      <Text style={style.font}>NO DATA AVAILABLE</Text>
    </View>
  );
};

export default NoData;
