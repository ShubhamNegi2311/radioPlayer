import { View } from 'react-native';
import React from 'react';
import LoaderComponent from '../../molecules/loaderComponent';
import { style } from './style';
import { AuthenticationContext } from '../../../../context/AuthenticationContext';

type AppLoaderProps = {
  children: React.ReactNode;
};

const AppLoader: React.FC<AppLoaderProps> = (props) => {
  const { isLoading } = React.useContext(AuthenticationContext);

  return (
    <View style={style.mainContainer}>
      {props.children}
      {isLoading ? <LoaderComponent /> : null}
    </View>
  );
};

export default AppLoader;
