import React from "react";
import { View, Text, Modal } from "react-native";
import { styles } from "./styles";
import AnimatedPress from "../../base/AnimatedPress/AnimatedPress";

interface InfoModalType {
  visible: boolean;
  onClose: (state: boolean) => void;
}

const InfoModal = ({ visible, onClose }: InfoModalType) => {
  const handleCloseModal = () => {
    onClose(false);
  };

  const renderInfoRows = () => {
    return (
      <>
        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Text style={styles.keyText}>Modal Info</Text>
            <Text style={styles.valueText}>Modal Info</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {renderInfoRows()}
          <AnimatedPress style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>close</Text>
          </AnimatedPress>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;
