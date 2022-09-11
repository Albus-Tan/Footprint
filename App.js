import React, {useState} from "react";
import {
    Text, Link, HStack, Center, Heading, Switch, useColorMode, NativeBaseProvider, extendTheme, VStack, Box,
} from "native-base";
import Footer from "./components/Footer";
import Header_FootPrint from "./components/Header";
import PersonalScreen from "./screens/PersonalScreen";
import MessageScreen from "./screens/MessageScreen";
import HistoryScreen from "./screens/HistoryScreen";
import BrowseScreen from "./screens/BrowseScreen";
import Login from "./components/Login";
import DetailScreen from "./screens/DetailScreen";
import RegisterForm from "./components/Register";
import {Platform} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import {PageSelectProvider} from "./utils/SwitchPage";
import MapScreen from "./screens/MapScreen";
import MapDetailInfo from "./components/MapDetailInfo";
import ReleaseSrceen from "./screens/ReleaseScreen";

// Define the config
const config = {
    useSystemColorMode: false, initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({config});


export default function App() {
    const [Page, SelectPage] = useState('home');
    const [Props, SetProps] = useState({})

    const Pages = {
        'home': <HomeScreen/>,
        'login': <Login/>,
        'register': <RegisterForm/>,
        'browse': <BrowseScreen/>,
        'message': <MessageScreen/>,
        'history': <HistoryScreen/>,
        'personal': <PersonalScreen/>,
        'detail': <DetailScreen/>,
        'map': <MapScreen/>,
        'mapDetailInfo': <MapDetailInfo/>,
        'release': <ReleaseSrceen/>,
    }


    return (<NativeBaseProvider>
        {/*<DetailScreen/>*/}
        {/* <MessageScreen /> */}
        {/* <HistoryScreen /> */}
        {/* <BrowseScreen />*/}
        {/*  <Footer /> */}
        {/* <HomeScreen /> */}
        {/* <Login /> */}
        {/* <RegisterForm /> */}
        {/*{Pages[Page]}*/}
        <PageSelectProvider.Provider value={{
            Page: Page,
            SelectPage: (p) => {
                SelectPage(p)
            }, Props: Props, SetProps: (p) => {
                SetProps(p)
            }
        }}>
            {Pages[Page]}
            {/*<Footer/>*/}
            {/*<MessageScreen/>*/}

        </PageSelectProvider.Provider>
    </NativeBaseProvider>);
}

// Color Switch Component
function ToggleDarkMode() {
    const {colorMode, toggleColorMode} = useColorMode();
    //改成默认是light模式，没有dark模式
    // colorMode = "light";
    return (<HStack space={2} alignItems="center">
        <Text>Dark</Text>
        <Switch
            isChecked={colorMode === "light"}
            onToggle={toggleColorMode}
            aria-label={colorMode === "light" ? "switch to dark mode" : "switch to light mode"}
        />
        <Text>Light</Text>
    </HStack>);
}
