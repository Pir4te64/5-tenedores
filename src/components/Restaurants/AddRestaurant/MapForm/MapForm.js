import React, { useEffect, useState } from "react";
import { styles } from "./MapForm.styles";
import { Modal } from "../../../Shared";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { View } from "react-native";
export function MapForm(props) {
  const { show, close } = props;
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Toast.show({
          type: "error",
          text1: "Permisos de localización",
          position: "bottom",
          text2:
            "Es necesario aceptar los permisos de localización para usar esta funcionalidad",
        });
        return;
      }
      const locationTemp = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);
  return (
    <Modal show={show} close={close}>
      <View>
        <MapView
          style={styles.map}
          initialRegion={location}
          showsUserLocation={true}
          onRegionChangeComplete={(region) => setLocation(region)}
        >
          <Marker draggable coordinate={location} />
        </MapView>
      </View>
    </Modal>
  );
}
