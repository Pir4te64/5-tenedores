import { View, ScrollView } from "react-native";
import React from "react";
import { styles } from "./LoginScreen.styles";
import { screen } from "../../../utils";
import { Image, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../components/Auth";
export function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/logo.png")}
        style={styles.img}
      />
      <View style={styles.container}>
        <LoginForm />
        <Text onPress={goToRegister} style={styles.register}>
          ¿Aún no tienes cuenta?
          <Text style={styles.btnRegister}> Regístrate</Text>
        </Text>
      </View>
    </ScrollView>
  );
}
