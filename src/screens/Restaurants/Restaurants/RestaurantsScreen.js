import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import { screen } from "../../../utils";
import { styles } from "./RestaurantScreen.styles";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export function RestaurantsScreen() {
  const navigate = useNavigation();
  const [isUserLogged, setIsUserLogged] = React.useState(false);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsUserLogged(user);
    });
  }, []);

  const goToRestaurant = () => {
    navigate.navigate(screen.restaurant.addRestaurant);
  };
  return (
    <View style={styles.container}>
      {isUserLogged && (
        <Icon
          name="plus"
          type="material-community"
          reverse
          color={"#00a680"}
          containerStyle={styles.btnContainer}
          onPress={goToRestaurant}
        />
      )}
    </View>
  );
}
