import React from 'react';
import {useStore} from 'hooks/useRxStore';
import {modalStore} from 'store/ModalStore';
import {StyleSheet, View} from 'react-native';
import {RenderModalContent} from './RenderModalContent';
import Modal from 'react-native-modal';
import {color} from '../../themes/corlor';
export const AppModal = React.memo(
  () => {
    const modalState = useStore({
      init: modalStore.modalState,
      subject: modalStore.modalStateSubject,
    });
    const {modalType, visible} = modalState;
    const close = () => modalStore.close();
    return (
      <Modal
        swipeDirection={['down']}
        onSwipeComplete={close}
        swipeThreshold={10}
        useNativeDriver={true}
        propagateSwipe={true}
        style={s.modal}
        isVisible={visible}>
        <View style={s.container}>
          {!!modalType && visible && (
            <RenderModalContent modalType={modalType} />
          )}
        </View>
      </Modal>
    );
  },
  () => true,
);

const s = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
    backgroundColor: color.opacity50,
    justifyContent: 'flex-end',
  },
});
