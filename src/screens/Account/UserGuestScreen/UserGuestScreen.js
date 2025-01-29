import { ScrollView } from "react-native";
import React from "react";
import { styles } from "./UserGuestScreen.styles";
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
export function UserGuestScreen() {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil de 5 Tenedores</Text>
      <Text style={styles.description}>
        ¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cuál te ha gustado más y
        comenta cómo ha sido tu experiencia.
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Ver tu perfil"
        onPress={goToLogin}
      />
    </ScrollView>
  );
}
