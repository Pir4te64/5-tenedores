import { View } from "react-native";
import React from "react";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangeName.styles";
export function ChangeName() {
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y Apellido"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
      />
      <Button
        title={"Guardar Cambios"}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
