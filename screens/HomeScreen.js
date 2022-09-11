import React, {Component} from 'react';
import {
    Text, View, ImageBackground, StyleSheet, Image, Button, Dimensions, TouchableOpacity,
} from 'react-native';
import {PageSelectProvider} from "../utils/SwitchPage";
// import {Button} from 'antd-mobile';
// import AwesomeButton from 'react-native-really-awesome-button';

const {windowWidth, windowHeight} = Dimensions.get('window');
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// const {screenWidth, screenHeight} = Dimensions.get('screen');
// let {width, height} = Dimensions.get('window');

const HomeScreen = () => {
    console.log("get home screen!");
    return <PageSelectProvider.Consumer>
        {({Page, SelectPage}) => (<ImageBackground
            style={styles.container}
            source={require('../image/BackGound.png')}>
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        source={require('../image/Logo.png')}
                        style={styles.logoIcon}
                    />
                    <Text style={styles.Title}>足迹</Text>
                </View>
                <View style={{marginTop: '20%'}}>
                    <Text style={styles.infoText}>
                        点击创建账户或登录即表示你同意我们的条款。在我
                        们的隐私政策和Cookies政策了解我们如何处理你的数据。
                    </Text>
                </View>
                <View style={styles.homeButton} onTouchEnd={() => SelectPage('register')}>
                    {/*<Button title={'创建账户'} color="rgba(0,0,0,0.3)" />*/}
                    <TouchableOpacity onPressIn={() => SelectPage('register')}>
                        <Text style={styles.buttonText}>创建账户</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.homeButton2} onTouchEnd={() => SelectPage('login')}>
                    {/*<Button title={'创建账户'} color="rgba(0,0,0,0.3)" />*/}
                    <TouchableOpacity>
                        <Text style={styles.buttonText2}>登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>)}
    </PageSelectProvider.Consumer>;

    // <Text>足迹</Text>

}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center', width: null, height: null, // //不加这句，就是按照屏幕高度自适应
        // //加上这句，就是按照屏幕自适应
        // resizeMode:Image.resizeMode.contain,
        // //去除内部元素的白色背景
        // backgroundColor: 'rgba(0,0,0,0)',
    }, iconview: {
        alignItems: 'center', marginTop: '10%',
    }, Title: {
        textAlign: 'center', color: '#ffffff', marginBottom: '30%', marginLeft: '2%', fontWeight: 'bold', fontSize: 45,
    }, logoIcon: {
        marginLeft: '30%', marginBottom: '30%', width: '10%', height: '20%',
    }, infoText: {
        color: '#ffffff', marginRight: '5%', fontWeight: 'bold', textAlign: 'center', marginLeft: '5%', fontSize: 14,
    }, username: {
        height: 40, width: '80%', marginLeft: '20',
    }, buttonText: {
        fontWeight: 'bold', textAlign: 'center', fontSize: 16,
    }, buttonText2: {
        fontWeight: 'bold', textAlign: 'center', fontSize: 16, color: '#ffffff',
    }, homeButton: {
        color: '#000000',
        borderRadius: 150,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        width: width * 0.8,
        height: height * 0.07,
        justifyContent: 'center',
        marginLeft: '10%',
        marginTop: '10%',
    }, homeButton2: {
        color: '#000000',
        borderRadius: 150,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ffffff',
        borderWidth: 5,
        alignItems: 'center',
        width: width * 0.8,
        height: height * 0.07,
        justifyContent: 'center',
        marginLeft: '10%',
        marginTop: '10%',
    }, linecolor: {
        width: '100%', borderWidth: 0.6, borderColor: '#817f7e',
    }, usernamepage: {
        marginLeft: 30, marginTop: 10,
    }, Input: {
        flexDirection: 'row', marginTop: 20,
    }, MainInput: {
        marginTop: '5%',
    }, ForgotPassword: {
        flexDirection: 'row', backgroundColor: 'transparent', marginRight: 40, marginTop: 16, alignSelf: 'flex-end',
    }, fontpassword: {
        color: '#bab9b7', fontSize: 14,
    }, signUp: {
        width: '100%',
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#ff3366',
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
    }, signUptext: {
        color: 'white', fontSize: 20,
    }, signUptextpage: {
        marginTop: '8%', color: '#bab9b7', backgroundColor: 'transparent',
    }, signUppageview: {
        justifyContent: 'center', alignItems: 'center',
    }, signUp_white: {
        color: 'white',
    },
});

export default HomeScreen;
