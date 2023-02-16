import { StyleSheet } from 'react-native';
import { FONT_FAMILY_BOLD } from '../../../../styling/typography';

export const style = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 300,
  },
  font: { marginTop: 12, fontFamily: FONT_FAMILY_BOLD },
});
