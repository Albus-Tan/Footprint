//点击历史足迹中的地图进入的详细信息界面
import React, {Component, useState} from 'react';
import {
    Box,
    Stack,
} from 'native-base';
import {
    Dimensions, Image,
    ImageBackground, Platform, StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import AntDesign from "react-native-vector-icons/AntDesign"
import {MapView, Polyline} from "react-native-amap3d";
import {AMapSdk, Marker} from "../lib/src";
import Header from "./Header";

import {PageSelectProvider} from "../utils/SwitchPage";
import IconON from 'react-native-vector-icons/Ionicons';
import ActionButton from "react-native-action-button";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const MapDetailInfo = () => {
    React.useEffect(() => {
        AMapSdk.init(
            Platform.select({
                android: "2b98dcea615041bc691ba73942fddc84",
                // ios: "186d3464209b74effa4d8391f441f14d",
            })
        );

    }, []);


    return <PageSelectProvider.Consumer>
        {({Page, SelectPage, Props}) => (
            <Box alignItems="center" h={h * 1.5}>
                <IconON name='arrow-back' style={style.actionButtonBigIcon}
                            onTouchEnd={() => {
                                SelectPage('history')
                            }}
                />
                <ActionButton position={'center'}  size={85} renderIcon={() =>{return <IconON name='arrow-back' style={style.actionButtonBigIcon}/>;}}>
                </ActionButton>
                <Box width="100%" overflow="hidden"

                >
                    <Stack p="5%" space={3} height={1.4 * h}>
                        <MapView
                            initialCameraPosition={{  // 初始化位置
                                target: {
                                    latitude: Number(Props.trace.centerLatitude),
                                    longitude: Number(Props.trace.centerLongitude),
                                },
                                zoom: Number(Props.trace.zoom)+0.5,  // 初始化大小等级
                            }}
                            // zoomControlsEnabled={false}  // 放大缩小按钮
                            // minZoom={}  // 所允许调整的最大最小 放大缩小zoom级别
                            scrollGesturesEnabled={false}
                            style={{height: "65%"}}

                        >
                            <Polyline
                                width={5}
                                points={Props.points}
                                color="rgba(40,113,62,1)"
                            />
                            <Marker
                                key={'start'}
                                icon={require("../example/images/point.png")}
                                position={Props.points[0]}
                            />
                            <Marker
                                key={'end'}
                                icon={require("../example/images/point.png")}
                                position={Props.points[Props.points.length - 1]}
                            />
                            {Props.pictures.map((item, index) => {  // 拍照打卡的图片
                                return (
                                    <View key={index}>
                                        <Marker
                                            // onPress={() => {
                                            //     this.handleAnimateToPos(item.location.coords.latitude, item.location.coords.longitude);
                                            //     alert("点击图片！");
                                            // }}  // TODO: 查看足迹详情或图片详情，需要显示所有同一地点的图片吗？
                                            draggable={false}
                                            position={{
                                                latitude: Number(item.latitude),
                                                longitude: Number(item.longitude),
                                            }}
                                        >
                                            <View style={style.imageWindow}>
                                                <Image style={style.image}
                                                       // source={item.pictureUrl}
                                                       source={{uri: item.pictureUrl}}
                                                />
                                            </View>
                                        </Marker>
                                        {/*<Image style={{width: 40, height: 40}} source={{uri: item.uri}} />*/}
                                        {/*<Text>{item.fileName}</Text>*/}
                                    </View>
                                );
                            })}
                        </MapView>
                    </Stack>
                </Box>
            </Box>
        )}
    </PageSelectProvider.Consumer>;
};



const style = StyleSheet.create({
    actionButtonBigIcon: {
        fontSize: 50,
        height: 43,
        color: 'black',
    },
    image: {
        width: 43,
        height: 43,
        alignItems: "center",
        textAlign: 'center',
        borderRadius: 10,
        marginTop: 3.5,
    },
    imageWindow: {
        height: 50,
        width: 50,
        backgroundColor:"white",
        alignItems: "center",
        textAlign: 'center',
        borderColor:"white",
        borderRadius:12,
    },
});

export default MapDetailInfo;