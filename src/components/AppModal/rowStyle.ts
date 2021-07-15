import {StyleSheet} from 'react-native';
import {metrics} from '../../themes/Dimension';
import {ITEM_HEIGHT} from '../../constant/DateConstant';

export const RowStyle = StyleSheet.create({
  FooterHeader: {
    height: metrics.screenHeight * 0.2,
  },
  row: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTxtSelected: {
    color: '#48D7DF',
  },
  dateTxtUnSelected: {
    color: '#C9CED4',
  },
});
