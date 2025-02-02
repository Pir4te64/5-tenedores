import { View } from "react-native";
import React from "react";
import { styles } from "./InfoForm.styles";
import { Input } from "react-native-elements";
import { MapForm } from "../MapForm/MapForm";
export function InfoForm(props) {
  const [showMap, setShowMap] = React.useState(false);
  const { formik } = props;
  const onOpenCloseMap = () => {
    setShowMap(!showMap);
  };
  return (
    <>
      <View style={styles.container}>
        <Input
          placeholder="Nombre del restaurante"
          errorMessage={formik.errors.name}
          onChangeText={(text) => formik.setFieldValue("name", text)}
        />
        <Input
          placeholder="Dirección"
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: "#c2c2c2",
            onPress: onOpenCloseMap,
          }}
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
      <MapForm show={showMap} close={onOpenCloseMap} />
    </>
  );
}
