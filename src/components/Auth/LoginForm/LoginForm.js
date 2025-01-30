import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./LoginForm.styles";
import { Input, Icon, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { screen } from "../../../utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export function LoginForm() {
  const navigate = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, values.email, values.password);
        navigate.navigate(screen.account.account);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Usuario o contraseña incorrectos",
          position: "bottom",
        });
        console.log(error);
      }
    },
  });
  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        containerStyle={styles.input}
        onChangeText={formik.handleChange("email")}
        errorMessage={formik.errors.email}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.input}
        password={true}
        onChangeText={formik.handleChange("password")}
        errorMessage={formik.errors.password}
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
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
