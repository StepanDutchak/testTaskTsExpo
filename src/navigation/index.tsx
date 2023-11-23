import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import routes from "../constants/Routes";

const Stack = createNativeStackNavigator();

const headerColor = "#797979";
const headerColorText = "#FFFF";

const text = {
  headerHomeScreen: "Fitness Score",
  headerDetailsScreen: "Details",
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: headerColor,
          },
          headerShown: true,
        }}
      >
        <Stack.Screen
          options={{
            headerTintColor: headerColorText,
            title: text.headerHomeScreen,
            headerTitleAlign: "center",
          }}
          name={routes.HOME_SCREEN}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerTintColor: headerColorText,
            title: text.headerDetailsScreen,
          }}
          name={routes.DETAILS_SCREEN}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
