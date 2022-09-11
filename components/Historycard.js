import React, {Component} from 'react';
import {
    Box,
    AspectRatio,
    Text
} from 'native-base';

import {Dimensions} from 'react-native';
import {PageSelectProvider} from "../utils/SwitchPage";
import {MapView, Polyline} from "react-native-amap3d";
import {askTraceByTrid,convertTracePoints2ArrJSON} from "../example/components/Position"
import {Marker} from "../lib/src";
import config from "../utils/config";
import moment from "moment";
import {getPictureUrlByFid} from "../utils/FootPrint";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const sid = 666058, tid = 519609448;
class Historycard extends Component {
    constructor(props) {
        super(props);
        // console.log("componentDidMount:", this.props.id);
    }
    date = "";
    location = "";
    state = {
        points: [],
        pictures: [],
    }

    getPictures = (fid) => {
        // TODO 确保拿到之后再进行到 detail 页面的跳转
        const p = getPictureUrlByFid(fid)
            .then((res) => {
                console.log("SUCCESS in Historycard getPictureUrlByFid", res);
                this.setState({pictures: res});
            })
            .catch((err) => {
                console.log("ERROR in Historycard getPictureUrlByFid", err);
            })
    }

    componentDidMount() {
        console.log("componentDidMount:", this.props.id);
        console.log("fid", this.props.fid);
        this.date = moment(config.baseDate).add(this.props.trace.date, "days").format(config.dateFormat);
        this.location = this.props.trace.location;
        this.getPictures(this.props.fid);
        askTraceByTrid(sid, tid, this.props.id)
            .then(
                res => {
                    // alert("成功!");
                    console.log('History SUCCESS', res);
                    let newpoints = convertTracePoints2ArrJSON(res.data.tracks[0].points);
                    this.setState({points: convertTracePoints2ArrJSON(res.data.tracks[0].points)});
                    // let latitude_min = 180, longitude_min = 180, latitude_max = 0, longitude_max = 0;
                    // for (var i = 0, l = newpoints.length; i < l; i++) {
                    //     latitude_min = Math.min(latitude_min, newpoints[i].latitude);
                    //     latitude_max = Math.max(latitude_max, newpoints[i].latitude);
                    //     longitude_min = Math.min(longitude_min, newpoints[i].longitude);
                    //     longitude_max = Math.max(longitude_max, newpoints[i].longitude);
                    // }
                    // this.initial_long = newpoints[0].latitude;
                    // this.initial_lati = newpoints[0].longitude;
                    // this.setState({
                    //     initial_latitude: (latitude_min + latitude_max) / 2.0,
                    //     initial_longitude: (longitude_min + longitude_max) / 2.0,
                    //     initial_zoom_level: 5
                    // });
                    // this.forceUpdate();
                }
            )
            .catch(err => {
                    console.log('History 获取失败', err);
                }
            )

    }
    render() {
        this.date = moment(config.baseDate).add(this.props.trace.date, "days").format(config.dateFormat);
        this.location = this.props.trace.location;
        const centerLatitude = Number(this.props.trace.centerLatitude);
        const centerLongitude = Number(this.props.trace.centerLongitude);
        const zoom = Number(this.props.trace.zoom);
        const hasInitPos = (centerLatitude!==null);
        //TODO: 修复bug 显示undefined
        return <PageSelectProvider.Consumer>
            {({Page, SelectPage, Props, SetProps}) =>
                (<Box width={0.95 * w} direction="column" margin={0.02 * w} height={0.4 * w}
                      onTouchEnd={
                          () => {
                              SetProps({points: this.state.points, trace: this.props.trace, pictures: this.state.pictures, })
                              console.log("go to mapdetail:", Props.points, Props.pictures);
                              SelectPage('mapDetailInfo');
                          }
                }
                    >
                        <AspectRatio w="100%" ratio={{base: 25 / 9, md: 16 / 9}}>
                            <MapView
                                initialCameraPosition={{  // 初始化位置
                                    target: {
                                        latitude: centerLatitude,
                                        longitude: centerLongitude,
                                    },
                                    zoom: zoom,
                                    // southwest: {
                                    //     latitude: 30.020923,
                                    //     longitude: 122.432887
                                    // },
                                    // northeast: {
                                    //     latitude: 32.020923,
                                    //     longitude: 120.432887
                                    // }

                                }}

                                zoomControlsEnabled={false} // 放大缩小按钮
                                scrollGesturesEnabled={false}
                                compassEnabled={false}
                                myLocationEnabled={false}
                                myLocationButtonEnabled={false}
                                rotateGesturesEnabled={false}
                                tiltGesturesEnabled={false}
                                scaleControlsEnabled={false}
                            >
                                <Polyline
                                    width={5}
                                    points={this.state.points}
                                    color="rgba(40,113,62,1)"
                                />
                                {/*<Polyline width={5} color="rgba(255, 0, 0, 0.5)" points={line1} />*/}
                                <Marker
                                    key={'start'}
                                    icon={require("../example/images/point.png")}
                                    position={this.state.points[0]}
                                />
                                <Marker
                                    key={'end'}
                                    icon={require("../example/images/point.png")}
                                    position={this.state.points[this.state.points.length - 1]}
                                />
                            </MapView>
                        </AspectRatio>
                        <Text mt={0.02 * w} color="gray.400" bold size="xl">
                            {this.date}  {this.location}
                            {/*TODO:添加具体地址位置信息*/}
                        </Text>
                    </Box>
                )}
        </PageSelectProvider.Consumer>
    }
}

export default Historycard;