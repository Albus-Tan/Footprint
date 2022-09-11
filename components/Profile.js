import React, {Component} from 'react';
import {
  Box,
  Image,
  HStack,
  Heading,
  AspectRatio,
  Stack,
  Center,
  VStack,
  Icon,
  Text,
  Button,
  Flex,
  Pressable
} from 'native-base';

import AntDesign from "react-native-vector-icons/AntDesign"
import {Dimensions} from 'react-native';
import {PageSelectProvider} from "../utils/SwitchPage";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

// const Profile = (props) => {
//     return (<PageSelectProvider.Consumer>
//         {({Page, SelectPage, Props, SetProps}) => {
//
//         }}
//     </PageSelectProvider.Consumer>)
// }

//获赞与收藏后端正在改
const Profile=(props)=>{
    console.log(w);
    console.log(h);
    console.log(0.2 * w);
    // 此处一下所有传入的信息如果不对的话，根据log进行修改
    console.log("get Profile data:", props);
    return (<PageSelectProvider.Consumer>
        {({Page, SelectPage, Props, SetProps}) => (
            <Box bg="cyan.400"  width="100%" height={0.4 * h} >
                <VStack space={2} >
                    <HStack justifyContent="space-around" mt="20%" mr={0.1 * w} >
                        <Image source={{
                            uri: "http://www.gx8899.com/uploads/allimg/2018032308/t5sso3lhjgd.jpg"
                        }} alt="Aang flying and surrounded by clouds" rounded="full" size={0.25 * w} maxW="144px" maxH="144px"/>
                        <Box justifyContent="space-around">
                            <VStack space={2} >
                                <Text color="white" fontSize="xl" bold>
                                    {props.info.name}
                                </Text>
                                <Text fontSize="sm" color="white">
                                    {props.info.uid}
                                </Text>
                            </VStack>
                        </Box>
                        <Box >
                            <Icon as={AntDesign} name="bells" size={w * 0.07} color="gray.500" _dark={{
                                color: "gray.700"
                            }} margin="auto" />
                        </Box>
                    </HStack>
                    <HStack justifyContent="flex-start" mt={0.05 * w}>
                        <HStack width={w * 0.4}  height={0.1 * w} flexDirection="row" ml={0.1 * w}>
                            <VStack  width={w * 0.15} flexDirection="column" bold>
                                <Text size="md" color="white">
                                    20
                                </Text>
                                <Text size="md" color="gray.500" margin="auto" bold>
                                    关注
                                </Text>
                            </VStack>
                            <VStack  width={w * 0.15} flexDirection="column" bold>
                                <Text size="md" color="white">
                                    5
                                </Text>
                                <Text size="md" color="gray.500" margin="auto" bold>
                                    粉丝
                                </Text>
                            </VStack>
                            <VStack  width={w * 0.15} flexDirection="column" bold>
                                <Text size="md" color="white">
                                    {props.info.liked}
                                </Text>
                                <Text size="md" color="gray.500" margin="auto" bold>
                                    获赞与收藏
                                </Text>
                            </VStack>
                        </HStack>
                        <Box width={0.3 * w} ml={0.15 *w}>
                            <Button size="md" variant="subtle" margin="auto" borderRadius="full" onPress={()=>{SelectPage('home');}}>
                                退出
                            </Button>
                        </Box>
                    </HStack>
                </VStack>
            </Box>
        )}
    </PageSelectProvider.Consumer>)

}

export default Profile;