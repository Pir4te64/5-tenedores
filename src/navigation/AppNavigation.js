import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "../screens/RestaurantsScreen";
import { FavouritesScreen } from "../screens/FavouritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
