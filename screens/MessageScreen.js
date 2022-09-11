import React, {useState} from "react";
import {Dimensions, TouchableOpacity, View} from "react-native";
import {
    Button, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, VStack, Spacer, Center, ScrollView, Divider
} from "native-base";
// import { SwipeListView } from "react-native-swipe-list-view";
// import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
// import Basic from "../components/MessageT";

import MessageItem from "../components/MessageT";
import Header_FootPrint from "../components/Header";
import Footer from "../components/Footer";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


function MessageScreen() {
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Afreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujita Mathur",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        timeStamp: "6:22 PM",
        recentText: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }];
    const [mode, setMode] = React.useState("Basic");
    return (<>
        <Header_FootPrint/>
        <HStack p={2} width={w} justifyContent="space-between" alignItems="flex-start">
            <Heading pl="2" pr="40%" size="lg" margin="auto">
                我的消息
            </Heading>
            <Button size="lg" variant="subtle" width={w * 0.3} height={'100%'} borderRadius="full">
                全部清除
            </Button>
        </HStack>
        <ScrollView
            width="100%"
            _contentContainerStyle={{
                mt: "1%", mb: "4", mr: "0", ml: "0",
            }}
            // showsVerticalScrollIndicator={false}
        >
            {data.map((item, index) => {
                return (<HStack flex="1" pl="2" height={'100%'} margin={'0'}>
                    <MessageItem key={item.id} data={item}/>
                </HStack>)
            })}
            {/* <MessageItem data={data[0]} /> */}
        </ScrollView>
    </>);

}

export default MessageScreen;
