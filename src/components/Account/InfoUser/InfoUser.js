import { View } from "react-native";
import React, { useState } from "react";
import { Avatar, Text } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { getAuth, updateProfile } from "firebase/auth";
import { styles } from "./InfoUser.styles";

export function InfoUser({ setLoading, setLoadingText }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const [avatar, setAvatar] = useState(user?.photoURL || "");

  const changePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) return;

    const localUri = result.assets[0].uri;
    saveImageLocally(localUri);
  };

  const saveImageLocally = async (uri) => {
    setLoadingText("Guardando imagen localmente...");
    setLoading(true);

    try {
      const fileName = `avatar_${user.uid}.jpg`;
      const filePath = `${FileSystem.documentDirectory}${fileName}`;

      await FileSystem.copyAsync({ from: uri, to: filePath });

      // Actualizar el perfil en Firebase con la ruta local (solo en emulador)
      await updateProfile(user, { photoURL: filePath });

      setAvatar(filePath);
    } catch (error) {
      console.error("Error guardando la imagen:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        icon={{ name: "person", type: "material" }}
        containerStyle={styles.avatar}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changePhoto} />
      </Avatar>
      <View style={styles.userInfo}>
        <Text style={styles.displayName}>{user.displayName || "Anónimo"}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
}
