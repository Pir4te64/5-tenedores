import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/index";
import { SearchScreen } from "../screens/SearchScreen";
const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.search.search}
        component={SearchScreen}
        options={{ title: "Search" }}
      />
    </Stack.Navigator>
  );
}
