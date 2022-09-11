import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {Platform, Text, useColorScheme, View} from "react-native";
import screens from "../example/screens";
import Home from "../example/home";
import FootprintMap from "../example/screens/footprintMap";
import Footer from "../components/Footer.js";
import {AMapSdk} from "react-native-amap3d";

const Stack = createNativeStackNavigator();

export default () => {
    React.useEffect(() => {
        AMapSdk.init(
            Platform.select({
                android: "2b98dcea615041bc691ba73942fddc84",
                // ios: "186d3464209b74effa4d8391f441f14d",
            })
        );
    }, []);
    return (
        <>
            <View style={{height: "90%",}}>
                <FootprintMap />
            </View>
            <Footer/>
        </>
    );
};