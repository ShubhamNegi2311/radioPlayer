import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import PlayerScreen from '../screens/playerScreen';
import PlayerWithListScreen from '../screens/playerWithListScreen';
import {HomeScreenStack} from './types';

// to keep application navigation
const Stack = createNativeStackNavigator<HomeScreenStack>();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
      <Stack.Screen
        name="PlayerWithListScreen"
        component={PlayerWithListScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
