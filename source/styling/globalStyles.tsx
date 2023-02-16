import { StyleSheet } from 'react-native';
import { BORDER_RADIUS } from '../ui/components/constants';
import { WHITE } from './colors';
import { FONT_FAMILY_REGULAR, FONT_SIZE_14 } from './typography';

export const globalStyle = StyleSheet.create({
  tabItem: {
    marginLeft: 12,
    marginTop: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
  },
  tabsContainer: {
    flexDirection: 'row',
    marginLeft: 12,
    marginBottom: 12,
  },
  tabTitle: { fontFamily: FONT_FAMILY_REGULAR, fontSize: FONT_SIZE_14 },
  tabViewBackground: { backgroundColor: WHITE },
});
