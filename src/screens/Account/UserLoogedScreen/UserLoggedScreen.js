import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./UserLoggedScreen.styles";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [LoadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);
  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
  const onReload = () => {
    setReload((prevState) => !prevState);
  };
  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <AccountOptions onReload={onReload} />
      <Button
        onPress={logout}
        title="Cerrar sesión"
        buttonStyle={styles.btnCloseSession}
        titleStyle={styles.btnCloseSessionText}
      />
      <LoadingModal show={loading} text={LoadingText} />
    </View>
  );
}
