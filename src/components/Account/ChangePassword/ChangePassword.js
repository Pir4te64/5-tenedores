import { View } from "react-native";
import React from "react";
import { styles } from "./ChangePasswordStyles";
import { initialValues, validationSchema } from "./ChangePasswordData";
import { useFormik } from "formik";
import { Input, Icon, Button } from "react-native-elements";
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import Toast from "react-native-toast-message";
export function ChangePassword(props) {
  const { onClose } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const { oldPassword, newPassword, confirmPassword } = values;

        if (!oldPassword || !newPassword || !confirmPassword) {
          // Manejar el caso donde alguno de los campos está vacío
          Toast.show({
            type: "error",
            text1: "Error al actualizar la contraseña",
            text2: "Por favor completa todos los campos de contraseña.",
          });
          return;
        }

        // Continuar con la lógica de reautenticación y actualización de contraseña
        const currentUser = getAuth().currentUser;
        const credential = EmailAuthProvider.credential(
          currentUser.email,
          oldPassword
        );
        await reauthenticateWithCredential(currentUser, credential);
        await updatePassword(currentUser, newPassword);

        onClose(); // Cerrar el formulario después de actualizar la contraseña
      } catch (error) {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "Error al actualizar la contraseña",
          text2: "Ha ocurrido un error al actualizar la contraseña.",
        });
      }
    },
  });

  return (
    <View style={styles.container}>
      <Input
        placeholder="Contraseña actual"
        secureTextEntry={!showPassword}
        style={styles.input}
        rightIcon={
          <Icon
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color={"#c2c2c2"}
            type="material-community"
            onPress={onShowPassword}
          />
        }
        errorMessage={formik.errors.oldPassword}
        onChangeText={(text) => formik.setFieldValue("oldPassword", text)}
      />
      <Input
        placeholder="Nueva contraseña"
        secureTextEntry={!showPassword}
        style={styles.input}
        rightIcon={
          <Icon
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color={"#c2c2c2"}
            type="material-community"
            onPress={onShowPassword}
          />
        }
        errorMessage={formik.errors.newPassword}
        onChangeText={(text) => formik.setFieldValue("newPassword", text)}
      />
      <Input
        placeholder="Repita la nueva contraseña"
        secureTextEntry={!showPassword}
        style={styles.input}
        rightIcon={
          <Icon
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color={"#c2c2c2"}
            type="material-community"
            onPress={onShowPassword}
          />
        }
        errorMessage={formik.errors.confirmPassword}
        onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
      />
      <Button
        title="Cambiar contraseña"
        containerStyle={styles.button}
        buttonStyle={{ backgroundColor: "#00a680" }}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
