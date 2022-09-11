import { Picker } from "@react-native-picker/picker";
import * as React from "react";
import {Button, Platform, Pressable, ScrollView} from "react-native";
import { MapType, MapView } from "react-native-amap3d";
import ActionSheet from 'react-native-actionsheet';
import SearchBar from 'react-native-search-bar';
import {getWalkingRoute, searchAroundLocation} from '../components/Position';

import ActionButton from 'react-native-action-button';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const items = ['Apples', 'Pie', 'Juice', 'Cake', 'Nuggets'];

export default class extends React.Component {
    search = React.createRef();
    state={
        mapType: MapType.Standard,
        isModalVisible: false,
        searchText: "",
        searchResult: "",
    };

    showActionSheet = () => {
        this.ActionSheet.show();
    }


    setMapType(value: MapType){
        this.setState({mapType: value,});
    }

    handleSearchButtonPressed(){
        console.log('Search Button pressed');
        const pois = searchAroundLocation(this.state.searchText)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log('周边地点搜索失败');
            });
        this.search.unFocus();
    }

    handleSearchTextChange(newSearchText: string){
        console.log('Search Text changed');
        this.setState({searchText: newSearchText,});
        console.log(newSearchText);
    }

    render() {
        const mapType = this.state.mapType;
        const searchText = this.state.searchText;
      return (
          <View style={StyleSheet.absoluteFill}>
              <SearchBar
                  ref={ref=>this.search = ref}
                  placeholder="Search..."
                  onChangeText={(newSearchText)=> {this.handleSearchTextChange(newSearchText)}}
                  onSearchButtonPress={()=> {this.handleSearchButtonPressed()}}
              />


              <View style={{flex:1}}>
                  <MapView style={{ flex: 1 }} mapType={mapType} onPress={()=>this.search.unFocus()} />
                  {/* Rest of the app comes ABOVE the action button component !*/}
                  <ActionButton buttonColor="rgba(231,76,60,1)" position={'left'} offsetY={50}>
                      <ActionButton.Item buttonColor='#f39800' title="我在哪里" onPress={() => {}}>
                          <IconM name="not-listed-location" style={style.actionButtonIcon} />
                      </ActionButton.Item>
                      <ActionButton.Item buttonColor='#1abc9c' title="路径规划" onPress={() => {}}>
                          <IconF5 name="route" style={style.actionButtonIcon} />
                      </ActionButton.Item>
                      <ActionButton.Item buttonColor='#3498db' title="增删标记点" onPress={() => {}}>
                          <IconMC name="map-marker-plus" style={style.actionButtonIcon} />
                      </ActionButton.Item>
                      <ActionButton.Item buttonColor='#3498db' title="完成标记点" onPress={() => {}}>
                          <IconMC name="map-marker-off" style={style.actionButtonIcon} />
                      </ActionButton.Item>
                      <ActionButton.Item buttonColor='#9b59b6' title="拍照打卡" onPress={() => console.log("notes tapped!")}>
                          <IconMC name="camera-marker" style={style.actionButtonIcon} />
                      </ActionButton.Item>
                  </ActionButton>
                  <ActionButton position={'center'} offsetY={40} size={75}>

                  </ActionButton>
              </View>

              <Picker
                  style={{ backgroundColor: "#fff" }}
                  selectedValue={mapType}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setMapType(itemValue)}
              >
                  <Picker.Item label="标准" value={MapType.Standard} />
                  <Picker.Item label="卫星" value={MapType.Satellite} />
                  <Picker.Item label="导航" value={MapType.Navi} />
                  <Picker.Item label="夜间" value={MapType.Night} />
                  <Picker.Item label="公交" value={MapType.Bus} />
              </Picker>
          </View>
      );
    }
};


const style = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    contentContainerStyle: {
        padding: 16,
        backgroundColor: '#F3F4F9',
    },
    // header: {
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    //     paddingVertical: 20,
    //     borderTopLeftRadius: 20,
    //     borderTopRightRadius: 20
    // },
    panelHandle: {
        width: 40,
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 4
    },
    item: {
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        marginVertical: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    inset: {
        flex: 1,
    },
    header: {
        textAlign: 'center',
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    listItem: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 18,
        backgroundColor: '#fff',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});

