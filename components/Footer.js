import React, {Component} from 'react';
import {Center, Box, Image, HStack, Spacer, Pressable} from 'native-base';
import {Dimensions} from 'react-native';
import {PageSelectProvider} from "../utils/SwitchPage";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default function Footer() {
    return (<PageSelectProvider.Consumer>
            {({Page, SelectPage}) => (<Box
                // flex={1}
                bg="white"
                // bg="primary.200"
                safeAreaTop
                width="100%"
                height="10%"
                position="absolute"
                bottom="0"
                alignSelf="center"
                borderColor="gray.100"
                borderTopWidth="3"
                // bgColor="primary.600"
            >
                <Center flex={1}/>
                <HStack alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable
                        // cursor="pointer"
                        opacity={Page === 'map' ? 1 : 0.5}
                        py="3"
                        flex={1}
                        onPress={() => SelectPage('map')}>
                        <Center>
                            {/*<Icon*/}
                            {/*  mb="1"*/}
                            {/*  as={*/}
                            {/*    <MaterialCommunityIcons*/}
                            {/*      name={selected === 0 ? 'home' : 'home-outline'}*/}
                            {/*    />*/}
                            {/*  }*/}
                            {/*  color="white"*/}
                            {/*  size="sm"*/}
                            {/*/>*/}
                            <Image
                                mb="50%"
                                source={Page === 'shot'? require('../image/map.png') : require('../image/map2.png')}
                                size={w * 0.08}
                                alt="map"
                            />
                        </Center>
                    </Pressable>
                    <Pressable
                        // cursor="pointer"
                        opacity={Page === 'shot' ? 1 : 0.5}
                        py="2"
                        flex={1}
                        //onPress={() => SelectPage('shot')}>
                        onPress={() => SelectPage('history')}>
                        <Center>
                            {/*<Icon*/}
                            {/*  mb="1"*/}
                            {/*  as={<MaterialIcons name="search" />}*/}
                            {/*  color="white"*/}
                            {/*  size="sm"*/}
                            {/*/>*/}
                            <Image
                                mb="50%"
                                source={Page === 'shot' ? require('../image/shot.png') : require('../image/shot2.png')}
                                size={w * 0.08}
                                alt="shot"
                            />
                        </Center>
                    </Pressable>
                    <Pressable
                        // cursor="pointer"
                        opacity={Page === 'browse' ? 1 : 0.6}
                        py="2"
                        flex={1}
                        onPress={() =>SelectPage('browse')}>
                        <Center>
                            <Image
                                mb="50%"
                                source={Page === 'browse' ? require('../image/neighborhood.png') : require('../image/neighborhood2.png')}
                                size={w * 0.075}
                                alt="neighborhood"
                            />
                        </Center>
                    </Pressable>
                    <Pressable
                        // cursor="pointer"
                        opacity={Page=== 'personal' ? 1 : 0.5}
                        py="2"
                        flex={1}
                        onPress={() => SelectPage('personal')}>
                        <Center>
                            <Image
                                mb="50%"
                                source={Page === 'personal' ? require('../image/person.png') : require('../image/person2.png')}
                                size={w * 0.08}
                                alt="person"
                            />
                        </Center>
                    </Pressable>
                </HStack>
            </Box>)}
        </PageSelectProvider.Consumer>);
}
