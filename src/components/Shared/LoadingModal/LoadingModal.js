import { View, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "./LoadingModal.styles";
import { Overlay, Text } from "react-native-elements";
export function LoadingModal(props) {
  const { show, text } = props;
  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#00a688" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

LoadingModal.defaultProps = {
  show: false,
};
