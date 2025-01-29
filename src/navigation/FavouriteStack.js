import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavouritesScreen } from "../screens/FavouritesScreen";
import { screen } from "../utils/index";
const Stack = createNativeStackNavigator();

export function FavouriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.favourites.favourites}
        component={FavouritesScreen}
        options={{ title: "Favorites" }}
      />
    </Stack.Navigator>
  );
}
