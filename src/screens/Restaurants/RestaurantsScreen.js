import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils";
export function RestaurantsScreen() {
  const navigate = useNavigation();
  const goToRestaurant = () => {
    navigate.navigate(screen.restaurant.addRestaurant);
  };
  return (
    <View>
      <Button title={"Crear restaurant"} onPress={goToRestaurant} />
    </View>
  );
}
