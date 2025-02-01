import { View } from "react-native";
import React from "react";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangeName.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./ChangeName.data";
import { getAuth, updateProfile } from "firebase/auth";
import Toast from "react-native-toast-message";
export function ChangeName(props) {
  const { onClose, onReload } = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validationOnChange: false,
    onSubmit: async (values) => {
      try {
        const { displayName } = values;
        const currentUser = getAuth().currentUser;
        await updateProfile(currentUser, { displayName });
        onReload();
        onClose();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Ha ocurrido un error al intentar actualizar el nombre",
        });
      }
    },
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y Apellido"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage={formik.errors.displayName}
      />
      <Button
        title={"Guardar Cambios"}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
