import { View } from "react-native";
import React from "react";
import { Input, Icon, Button } from "react-native-elements";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
      />
    </View>
  );
}
