import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "../screens/RestaurantsScreen";
import { FavouritesScreen } from "../screens/FavouritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { Icon } from "react-native-elements";
import { screen } from "../utils/index";
const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen name={screen.restaurant.tab} component={RestaurantsScreen} />
      <Tab.Screen name={screen.favourites.tab} component={FavouritesScreen} />
      <Tab.Screen name={screen.ranking.tab} component={RankingScreen} />
      <Tab.Screen name={screen.search.tab} component={SearchScreen} />
      <Tab.Screen name={screen.account.tab} component={AccountScreen} />
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
