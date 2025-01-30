import { View } from "react-native";
import React from "react";
import { Input, Icon, Button } from "react-native-elements";
import { styles } from "./RegisterForm.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import Toast from "react-native-toast-message";
export function RegisterForm() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = React.useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        navigation.navigate(screen.account.account);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Error al registrarse, intentelo mas tarde",
          position: "bottom",
        });
      }
    },
  });
  const showHidePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
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
        secureTextEntry={showPassword ? false : true}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={showHidePassword}
          />
        }
      />
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={showHidePassword}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
