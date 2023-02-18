import React from 'react';
import {View} from 'react-native';

type DividerViewProps = {
  height: number;
  color?: string;
};

const DividerView: React.FC<DividerViewProps> = props => {
  return (
    <View
      style={{
        height: props.height,
        width: '100%',
        backgroundColor: props.color ?? '#EEEEEE',
      }}
    />
  );
};

export default DividerView;
