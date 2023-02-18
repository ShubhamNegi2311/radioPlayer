import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 5,
    marginVertical: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemInnerContainer: {flexDirection: 'column'},
  songNameText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songSingerText: {
    color: '#000000',
    fontSize: 14,
    marginTop: 5,
  },
  songTrackLengthText: {color: '#000000', fontSize: 16, fontWeight: 'bold'},
});
