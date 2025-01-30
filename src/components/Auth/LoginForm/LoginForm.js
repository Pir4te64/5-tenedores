import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./LoginForm.styles";
import { Text, Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export function LoginForm() {
  const navigate = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={handleShowPassword}
          />
        }
      />
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
