import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";
import { MapView, Marker } from "react-native-amap3d";
import ActionButton from 'react-native-action-button';
import {View, Button, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default () => {
  const [time, setTime] = useState(new Date());
    const [imgs, setImgs] = useState([]);

    const addPhoto = () => {
        launchImageLibrary(
            {
                mediaType: 'photo', // 'photo' or 'video' or 'mixed'
                selectionLimit: 0, // 1为一张，0不限制数量
                includeBase64: true,
            },
            res => {
                setImgs(res.assets);
            },
        );
    };

    const addVideo = () => {
        launchImageLibrary(
            {
                mediaType: 'video',
                selectionLimit: 1,
            },
            res => {
                setImgs(res.assets);
            },
        );
    };

    const tackPhoto = () => {
        launchCamera(
            {
                mediaType: 'photo',
                cameraType: 'back',
            },
            res => {
                //alert(res.errorCode);
                setImgs(res.assets);
            },
        );
    };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
      <View style={StyleSheet.absoluteFill}>
          <View>
              <Button title="启动图库选择图像" onPress={() => addPhoto()} />
              <Button title="启动图库选择视频" onPress={() => addVideo()} />
              <Button title="启动相机拍摄图片" onPress={() => tackPhoto()} />

          </View>
          <MapView initialCameraPosition={{ zoom: 11.2 }}>
              <Marker
                  position={{ latitude: 39.806901, longitude: 116.397972 }}
                  onPress={() => alert("onPress")}
                  icon={require("../images/flag.png")}
              />
              {imgs.map((item, index) => {
                  return (
                      <View key={index}>
                          <Marker
                              onPress={() => alert("onPress")}
                              position={{ latitude: 39.806901, longitude: 116.297972 }}
                              icon={{
                                  uri: item.uri,
                                  width: 30,
                                  height: 30,
                              }}
                          />
                          <Image style={{width: 50, height: 50}} source={{uri: item.uri}} />
                          <Text>{item.fileName}</Text>
                      </View>
                  );
              })}
              <Marker
                  position={{ latitude: 39.906901, longitude: 116.397972 }}
                  onPress={() => alert("onPress")}
              >
                  <Text style={style.customView}>{time.toLocaleString()}</Text>
              </Marker>
          </MapView>
      </View>
  );
};

const style = StyleSheet.create({
    imageBorder: {
        alignItems: "center",
        color: "#fff",
        width: 30,
        length:30,
    },
  customView: {
    color: "#fff",
    backgroundColor: "#009688",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
  },

    button: {
        flexDirection: "column",
        marginRight: 8,
        marginBottom: 8,
    },
});
