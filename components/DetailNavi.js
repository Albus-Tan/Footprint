import React, {Component} from 'react';
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
    Text,
} from 'native-base';
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const HeadPortrait=()=>{
    return (
        <VStack mr="3%" ml="3%">
            <Image
            ml="5%"
            source={{
                uri: "http://www.gx8899.com/uploads/allimg/2018032308/t5sso3lhjgd.jpg"
              }}
            // source={require('http://tupian.qqw21.com/article/UploadPic/2019-7/201971622263482217.jpeg')}
            alt="image"
            size={w * 0.12}
            resizeMode={'contain'}
            borderRadius="300px"
        /> 
        <Text margin="auto">
            protrait
        </Text>
      </VStack>
    );
}

const DetailNavi = () =>{
    return (
        <Box direction="row" justifyContent="space-around" w="100%" height={0.12 * h}>
            <HStack alignItems="center" safeAreaBottom justifyContent="center">
                <HeadPortrait/>
                <HeadPortrait/>
                <HeadPortrait/>
                <HeadPortrait/>
            </HStack>
        </Box>
    );
  };

export default DetailNavi;