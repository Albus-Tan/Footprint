import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import {Box} from "native-base";
import DetailInfo from '../components/DetailInfo';
import DetailNavi from '../components/DetailNavi';
import Header_FootPrint from '../components/Header';
import Footer from '../components/Footer';
import {StyleSheet} from "react-native";
import {PageSelectProvider} from "../utils/SwitchPage";

const DetailScreen = () => {
    return (<PageSelectProvider.Consumer>
        {({Page, SelectPage, Props, SetProps}) => DetailScreen2(Props)}
    </PageSelectProvider.Consumer>)
}

const DetailScreen2=(myProps)=>{
    // 此处Props的格式我也不是很清楚qwq，如果不对的话可以根据log改一下
    console.log("get paremeter DetailScreen2:", myProps);
    return(
        <Box>
            <Header_FootPrint />
                <DetailNavi />
            <ScrollView style={{height:"74%"}}>
                <DetailInfo props={myProps}/>
                {/*{DetailInfo(myProps)}*/}
            </ScrollView>
            <Footer/>
        </Box>
    );
}

export default DetailScreen;

 