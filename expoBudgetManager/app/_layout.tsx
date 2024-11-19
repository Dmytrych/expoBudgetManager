import React from "react";
import {Tabs} from "expo-router";

export default function RootLayout() {
    return (<Tabs>
        <Tabs.Screen name="(tabs)" options={{ headerShown: false }}/>
    </Tabs>)
}
