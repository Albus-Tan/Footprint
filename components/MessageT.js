import React, { useState } from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { NativeBaseProvider, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, VStack, Spacer, Center, ScrollView, Divider} from "native-base";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


function MessageItem(props){
    console.log(props.data);
    return(
        <Box bgColor="secondary.300" width={w}>
            <Pressable onPress={() => console.log("You touched me")} _dark={{
                bg: "coolGray.800"
            }} _light={{
                bg: "white"
            }}>
                <Box pl="4" pr="5" py="2" height={'100%'} margin={'0'}>
                    <HStack alignItems="center" space={3}>
                        <Avatar size="48px" source={{
                            uri: props.data.avatarUrl
                        }} />
                        <VStack width={w * 0.5} >
                            <Text color="coolGray.800" _dark={{
                                color: "warmGray.50"
                            }} bold>
                                {props.data.fullName}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {props.data.recentText}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" color="coolGray.800"   _dark={{
                            color: "warmGray.50"
                        }} alignSelf="flex-start">
                            {props.data.timeStamp}
                        </Text>
                    </HStack>
                </Box>
            </Pressable>
        </Box>
    )
}

export default MessageItem;
