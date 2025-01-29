import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../utils/index";
import { AccountScreen } from "../screens/AccountScreen";
const Stack = createNativeStackNavigator();

export function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.account.account}
        component={AccountScreen}
        options={{ title: "Account" }}
      />
    </Stack.Navigator>
  );
}
