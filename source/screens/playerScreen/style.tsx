import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  bottomSheetContainer: {
    position: 'absolute',
    height: 100,
    width: '100%',
    backgroundColor: '#FFFFFF',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
  },
  bottomSheetDragHead: {
    width: 75,
    backgroundColor: '#CCCCCC',
    height: 8,
    borderRadius: 12,
    marginTop: 10,
  },
  trackDayText: {
    fontSize: 16,
    color: '#CCCCCC',
    letterSpacing: 2,
    marginTop: 10,
  },
});
