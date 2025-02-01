import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./ChangeEmailForm.styles";
import { Button, Input } from "react-native-elements";
import { useFormik } from "formik";
import {
  getAuth,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./ChangeEmail.data";
export function ChangeEmailForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const { onClose, onReload } = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      const auth = getAuth();
      const user = auth.currentUser;
      try {
        const credential = EmailAuthProvider.credential(
          user.email,
          formData.password
        );
        await reauthenticateWithCredential(user, credential);
        await updateEmail(user, formData.email);
        onClose();
        onReload();
      } catch (error) {
        console.log(error);

        Toast.show({
          type: "error",
          text1: "Error al actualizar email",
          autoHide: true,
          visibilityTime: 2000,
        });
      }
    },
  });
  const onShowPassword = () => setShowPassword(!showPassword);
  return (
    <View style={styles.view}>
      <Input
        placeholder="Nuevo Email"
        containerStyle={styles.input}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2",
        }}
        errorMessage={formik.errors.email}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={!showPassword}
        rightIcon={{
          type: "material-community",
          name: showPassword ? "eye-off-outline" : "eye-outline",
          color: "#c2c2c2",
          onPress: onShowPassword,
        }}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Button
        title={"Cambiar email"}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
