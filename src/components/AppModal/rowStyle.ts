import {StyleSheet} from 'react-native';
import {metrics} from '../../themes/Dimension';
import {ITEM_HEIGHT} from '../../constant/DateConstant';
import {color} from '../../themes/corlor';

export const RowStyle = StyleSheet.create({
  container: {
    height: metrics.screenHeight * 0.7,
    backgroundColor: 'white',
    borderRadius: 15,
    paddingTop: 20,
  },
  titleGroup: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
  datepickerWrapper: {
    height: metrics.screenHeight * 0.45,
    width: '100%',
    flexDirection: 'row',
  },
  eachPart: {
    flex: 1,
    alignItems: 'center',
  },
  detector: {
    position: 'absolute',
    width: '100%',
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: color.baseGreen,
    top: metrics.screenHeight * 0.2,
    zIndex: -1,
  },
  btnWrapper: {
    marginTop: 10,
  },
  btn: {
    width: metrics.screenWidth * 0.9,
    height: 40,
    backgroundColor: color.baseGreen,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtInput: {
    width: metrics.screenWidth * 0.9,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  btnText: {
    color: color.white,
    fontSize: 20,
  },
  FooterHeader: {
    height: metrics.screenHeight * 0.2,
  },
  row: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTxtSelected: {
    color: color.baseGreen,
    fontWeight: '700',
  },
  dateTxtUnSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
  },
});
