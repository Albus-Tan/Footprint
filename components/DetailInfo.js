//社交界面里面的详细信息
import React, {Component} from 'react';
import {PageSelectProvider} from "../utils/SwitchPage";
import {
    Container,
    Box,
    Image,
    Flex,
    HStack,
    Spacer,
    Heading,
    NativeBaseProvider,
    VStack,
    ScrollView,
    FlatList,
    Text,
    Center,
    AspectRatio,
    Stack,
    Icon,
    Pressable,
} from 'native-base';
import {
    Dimensions,

    ImageBackground, Platform, StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

import AntDesign from "react-native-vector-icons/AntDesign"
import {MapView, Polyline} from "react-native-amap3d";
import {AMapSdk, Marker} from "../lib/src";
import { setLike } from '../utils/Post';
import {storage} from '../utils/Storage';
import {askTraceByTrid, convertTracePoints2ArrJSON} from "../example/components/Position";
import {getPictureUrlByFid} from "../utils/FootPrint";
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const sid = 666058, tid = 519609448;

const line1 = [
    { latitude: 40.006901, longitude: 116.097972 },
    { latitude: 41.006901, longitude: 116.597972 },
];

const line2 = [
    { latitude: 39.906901, longitude: 116.097972 },
    { latitude: 39.906901, longitude: 116.597972 },
];

const line3 = [
    { latitude: 39.806901, longitude: 116.097972 },
    { latitude: 32.806901, longitude: 116.257972 },
    { latitude: 33.806901, longitude: 116.457972 },
    { latitude: 39.806901, longitude: 116.597972 },
];

// const DetailInfo = () => {
//     return (<PageSelectProvider.Consumer>
//         {({Page, SelectPage, Props, SetProps}) => DetailInfo2(Props)}
//     </PageSelectProvider.Consumer>)
// }


const DetailInfo = (props) => {

    const [liked, setliked] = React.useState(0);
    const [collected, setColleted] = React.useState(0);
    const [uid, setUid] = React.useState(0);
    const [points, setPoints] = React.useState([]);
    //
    // const getPictures = (fid) => {
    //     // TODO 确保拿到之后再进行到 detail 页面的跳转
    //     const p = getPictureUrlByFid(fid)
    //         .then((res) => {
    //             console.log("SUCCESS in Historycard getPictureUrlByFid", res);
    //             this.setState({pictures: res});
    //         })
    //         .catch((err) => {
    //             console.log("ERROR in Historycard getPictureUrlByFid", err);
    //         })
    // }
    //
    const getTrace = (props) => {
        console.log("getTrace", props);
        // getPictures(props.fid);
        askTraceByTrid(sid, tid, props.trid)
            .then(
                res => {
                    // alert("成功!");
                    console.log('History SUCCESS', res);
                    const newpoints = convertTracePoints2ArrJSON(res.data.tracks[0].points);
                    setPoints(newpoints);
                }
            )
            .catch(err => {
                    console.log('History 获取失败', err);
                }
            )
    }

    
    React.useEffect(() => {
        console.log("!!! DetailInfo: ",props.props);
        getTrace(props.props.info.footPrint);
        AMapSdk.init(
            Platform.select({
                android: "2b98dcea615041bc691ba73942fddc84",
                // ios: "186d3464209b74effa4d8391f441f14d",
            })
        );
        storage.load('uid', (data)=>{
            console.log("uid",data);
            setUid(data);     //不知道这样直接获取缓存中的uid再set对不对
      });
    }, []);
    
    //处理用户点赞信息
    const handleLike = () => {
      console.log("handleLike");
      console.log("uid:", uid);
      console.log("pid:", props.props.info.id);
      setLike(uid, props.props.info.id)
      .then(res => {
        if(res.status === 500){
            console.log("FAILED 点赞失败", res);
            alert("点赞失败！");
            return;
        }
        console.log("SUCCESS 点赞成功！", res);
        setliked(1);
        })
        .catch(err => {
            console.log('ERROR 注册时连接失败 ');
        });
    }

    return <Box alignItems="center" h={h * 1.3}>
        <Box width="100%"  overflow="hidden" >
          <Box width="100%" >
            <ScrollView horizontal={true} height={0.41 * h} showsHorizontalScrollIndicator={false} 
              >
              <FlatList  data={props.props.info.footPrint.footPrintPicture} numColumns={2}  renderItem={({
                        item
                        }) =><AspectRatio width={w} height={0.41 * h} justifyContent="center" >
                                <Image source={{
                                uri: item.pictureUrl
                              }} alt="image" 
                              resizeMode="cover"/>
                              </AspectRatio>
                        } keyExtractor={item => item.fpid} />
            </ScrollView>
          </Box>
          <Stack  p="5%"  space={3} height={0.85 * h}>
            <HStack space={2}  justifyContent="space-between">
            <Stack space={2}>
              <Heading size="md" ml="-1" bold>
                {props.props.info.topic}
              </Heading>
              <Text fontSize="xs" _light={{
              color: "primary.500"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="500" ml="-0.5" mt="-1">
                {props.props.info.user.name}
              </Text>
            </Stack>
            <HStack space={4}>
                <Pressable
                // py="3"
                // flex={1}
                onPress={handleLike}>
                <Icon 
                    as={AntDesign}
                    mb="1"
                    name={liked === 0 ? 'hearto' : 'heart'}
                    size="xl"
                    color={liked === 0 ? "primary.400" : "red.400"}
                    size="sm"
                    mt="10%"
                    size="lg"
                />
                </Pressable>
                <Icon as={AntDesign} name="message1" size="lg" color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                 <Icon as={AntDesign} name="export" size="lg" color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                <Pressable
                onPress={() => setColleted(1)}>
                 <Icon as={AntDesign} 
                    name={collected === 0 ? "addfolder": "folder1"} size="lg" 
                    color="primary.400" _dark={{
                    color: "primary.300"
                }} />
                </Pressable>
                </HStack>
            </HStack>
            <Text fontWeight="400">
              {props.props.info.content}
            </Text>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="coolGray.500" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  {props.props.info.tag}
                </Text>
              </HStack>
            </HStack>
              {/*<HStack alignItems="center" space={4} justifyContent="space-between">*/}
              {/*    <HStack alignItems="center">*/}
              {/*        <Text color="coolGray.500" _dark={{*/}
              {/*            color: "warmGray.200"*/}
              {/*        }} fontWeight="600" fontSize="16">*/}
              {/*            足迹*/}
              {/*        </Text>*/}
              {/*    </HStack>*/}
              {/*</HStack>*/}
              <MapView
                  initialCameraPosition={{  // 初始化位置
                      target: {
                          latitude: Number(props.props.info.footPrint.centerLatitude),
                          longitude: Number(props.props.info.footPrint.centerLongitude),
                      },
                      zoom: Number(props.props.info.footPrint.zoom)+0.5,  // 初始化大小等级
                  }}
                  // zoomControlsEnabled={false}  // 放大缩小按钮
                  // minZoom={}  // 所允许调整的最大最小 放大缩小zoom级别
                  scrollGesturesEnabled={false}
                  style={{height: "65%"}}

              >
                  <Polyline
                      width={5}
                      points={points}
                      color="rgba(40,113,62,1)"
                  />
                  <Marker
                      key={'start'}
                      icon={require("../example/images/point.png")}
                      position={points[0]}
                  />
                  <Marker
                      key={'end'}
                      icon={require("../example/images/point.png")}
                      position={points[points.length - 1]}
                  />
                  {props.props.info.footPrint.footPrintPicture.map((item, index) => {  // 拍照打卡的图片
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
      </Box>;
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

export default DetailInfo;