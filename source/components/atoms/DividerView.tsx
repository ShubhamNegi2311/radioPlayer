import { View } from 'react-native';
import React from 'react';
import { GRAY } from '../../../styling/colors';

type DividerViewProps = {
  height: number;
  color?: string;
};

const DividerView: React.FC<DividerViewProps> = (props) => {
  return (
    <View
      style={{
        height: props.height,
        width: '100%',
        backgroundColor: props.color ?? GRAY,
      }}
    />
  );
};

export default DividerView;
