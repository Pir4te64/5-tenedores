import { View, Text } from "react-native";
import React from "react";
import { styles } from "./RegisterScreen.styles";
import { Image } from "react-native-elements";
import { RegisterForm } from "../../../components/Auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../../assets/img/logo.png")}
        style={styles.img}
      />
      <View style={styles.container}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
