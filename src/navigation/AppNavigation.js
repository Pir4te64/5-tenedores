import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantStart } from "../navigation/RestaurantStart";
import { Icon } from "react-native-elements";
import { screen } from "../utils/index";
import { FavouriteStack } from "./FavouriteStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        headerShown: false,
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen name={screen.restaurant.tab} component={RestaurantStart} />
      <Tab.Screen name={screen.favourites.tab} component={FavouriteStack} />
      <Tab.Screen name={screen.ranking.tab} component={RankingStack} />
      <Tab.Screen name={screen.search.tab} component={SearchStack} />
      <Tab.Screen name={screen.account.tab} component={AccountStack} />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;
  if (route.name === screen.restaurant.tab) {
    iconName = "compass-outline";
  } else if (route.name === screen.favourites.tab) {
    iconName = "heart-outline";
  } else if (route.name === screen.ranking.tab) {
    iconName = "star-outline";
  } else if (route.name === screen.search.tab) {
    iconName = "magnify";
  } else if (route.name === screen.account.tab) {
    iconName = "home-outline";
  }
  return (
    <Icon type="material-community" name={iconName} size={size} color={color} />
  );
}
