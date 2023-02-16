import { View } from "react-native";
import React from "react";

interface SpaceViewProps {
  height: number;
}

const SpaceView = (props: SpaceViewProps) => {
  return <View style={{ height: props.height, width: "100%" }} />;
};

export default SpaceView;
