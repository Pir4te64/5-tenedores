import { View } from "react-native";
import React from "react";
import { Avatar, Text } from "react-native-elements";
import { getAuth } from "firebase/auth";
import { styles } from "./InfoUser.styles";
export function InfoUser() {
  const { uid, photoURL, displayName, email } = getAuth().currentUser;
  const changePhoto = () => {
    console.log("Change photo");
  };
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size="large"
        icon={{ name: "person", type: "material" }}
        containerStyle={styles.avatar}
        source={{
          uri: photoURL,
        }}
      >
        <Avatar.Accessory size={24} onPress={changePhoto} />
      </Avatar>
      <View style={styles.userInfo}>
        <Text style={styles.displayName}>{displayName || "Anónimo"}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}
