import React from "react";

import {
    createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import ExploreScreen from "@/app/(tabs)/explore";
import HomeScreen from "@/app/(tabs)/index";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

export default function RootLayout() {
    return (<MaterialTopTabs>
        <MaterialTopTabs.Screen name="explore" options={{ headerShown: false }}/>
        <MaterialTopTabs.Screen name="index" options={{ headerShown: false }}/>
    </MaterialTopTabs>)
}
