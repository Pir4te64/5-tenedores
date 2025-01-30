import { View, Text } from "react-native";
import React from "react";
import { styles } from "./UserLoggedScreen.styles";
import { InfoUser } from "../../../components/Account";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
export function UserLoggedScreen() {
  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
  return (
    <View>
      <InfoUser />
      <Button
        onPress={logout}
        title="Cerrar sesión"
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionText}
      />
    </View>
  );
}
