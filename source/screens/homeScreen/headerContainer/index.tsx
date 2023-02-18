import React from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type HeaderContainerProps = {};

const HeaderContainer: React.FC<HeaderContainerProps> = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
      }}>
      <MaterialCommunityIcons name="home" size={30} color={'#000000'} />
      <Text style={{color: '#000000', fontSize: 18, fontWeight: 'bold'}}>
        Rad.io
      </Text>
      <MaterialCommunityIcons name="magnify" size={30} color={'#000000'} />
    </View>
  );
};

export default HeaderContainer;
