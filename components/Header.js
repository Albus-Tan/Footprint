import React, {Component} from 'react';
import {
    Container, Box, Image, Flex, HStack, Spacer, Heading, NativeBaseProvider, Avatar, Center, Icon
} from 'native-base';
import {
    Dimensions, ImageBackground, TouchableOpacity, View,
} from 'react-native';
import {PageSelectProvider} from "../utils/SwitchPage";
import FontAwesome from "react-native-vector-icons/FontAwesome"

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

class Header_FootPrint extends Component {
    render() {
        const heightHeader = 0.1 * h;
        return (<Box width={w} mt="2%" height={this.heightHeader} borderColor="gray.100" borderBottomWidth="3">
            <PageSelectProvider.Consumer>
                {({Page, SelectPage}) => (
                    <HStack space={3} alignItems="center" justifyContent="space-between" mt="10%" mr="10%">
                        <Avatar
                            ml="5%"
                            source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}
                            alt="image"
                            size={w * 0.1}
                            onTouchEnd={() => {
                                SelectPage('personal')
                            }}
                        />
                        <Center width={0.7 * w} direction="row">
                            <HStack>
                                <Image
                                    source={require('../image/LogoC.png')}
                                    alt="image"
                                    size={w * 0.08}
                                    resizeMode={'contain'}
                                />
                                <Heading
                                    color="primary.400"
                                    bold
                                    textAlign="left"
                                    width="30%"
                                    fontSize="25px"
                                >
                                    足迹
                                </Heading>
                            </HStack>
                        </Center>
                        {/* <Image
            ml="-10%"
            source={require('../image/bell.png')}
            alt="image"
            size={w * 0.1}
            resizeMode={'contain'}
            borderRadius={h * 0.03}
          /> */}
                        <HStack onTouchEnd={()=>{SelectPage('message')}}>
                            <Icon as={FontAwesome} name="bell" size={w * 0.07} color="gray.500" _dark={{
                                color: "gray.700"
                            }} margin="auto"/>
                        </HStack>

                    </HStack>)}
            </PageSelectProvider.Consumer>
        </Box>);
    }
}

export default Header_FootPrint;
