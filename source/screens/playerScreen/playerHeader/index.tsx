import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type PlayerHeaderProps = {};

const PlayerHeader: React.FC<PlayerHeaderProps> = props => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
      }}>
      <MaterialCommunityIcons
        name="arrow-left"
        size={30}
        color={'#000000'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <FontistoIcons name="equalizer" size={20} color={'#000000'} />
    </View>
  );
};

export default PlayerHeader;
