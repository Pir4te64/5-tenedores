import { View } from "react-native";
import React from "react";
import { styles } from "./InfoForm.styles";
import { Input } from "react-native-elements";
export function InfoForm(props) {
  const { formik } = props;
  return (
    <View style={styles.container}>
      <Input
        placeholder="Nombre del restaurante"
        errorMessage={formik.errors.name}
        onChangeText={(text) => formik.setFieldValue("name", text)}
      />
      <Input
        placeholder="Dirección"
        errorMessage={formik.errors.address}
        onChangeText={(text) => formik.setFieldValue("address", text)}
      />
      <Input
        placeholder="Teléfono"
        errorMessage={formik.errors.phone}
        onChangeText={(text) => formik.setFieldValue("phone", text)}
      />
      <Input
        placeholder="Correo electrónico"
        errorMessage={formik.errors.email}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <Input
        placeholder="Descripción"
        multiline={true}
        inputContainerStyle={styles.textarea}
        errorMessage={formik.errors.description}
        onChangeText={(text) => formik.setFieldValue("description", text)}
      />
    </View>
  );
}
