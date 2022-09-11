import Card from "../components/card";
import React, {Component} from 'react';
import {
    Container, Box, Image, Flex, Text, ScrollView, Stack, Divider, Center, View, FlatList,
} from 'native-base';

import {Dimensions} from 'react-native';
import { getAllPost } from "../utils/Post";
import Footer from "../components/Footer";
import Header_FootPrint from "../components/Header";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

// const BrowseScreen = () => {
//     return (<>
//         <View>
//             <Header_FootPrint/>
//             <ScrollView width="100%" height={0.8 * h} mb={0.1 * h}
//                         _contentContainerStyle={{
//                             // px: "20px",
//                             mt: "1%", mb: "50px", mr: "0", ml: "0",
//                         }}>
//                 <Flex direction="row" margin="1%" flexWrap="wrap" justifyContent="space-around">
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                     <Card/>
//                 </Flex>
//                 <Divider/>
//                 <Box textAlign="center" height={0.08 * h}>
//                     <Text color="gray.300" size="xl" ml="30%">
//                         没有更多啦！w(ﾟДﾟ)w
//                     </Text>
//                 </Box>
//             </ScrollView>
//         </View>
//         <Footer/>
//     </>);
// }

// 此时暂定的逻辑是取所有的页面
class BrowseScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        getAllPost()
        .then(
            res => {
                console.log('SUCCESS IN getPost return!', res);
                this.setState({posts: res});
            }
        )
        .catch(err => {
                console.log('ERROR IN getPost return!', result);
            }
        )
    }

    render() {
        const {posts} = this.state;
        // const posts = [{id:1,
        //     footPrint: {
        //         footPrintPicture:[
        //             {pictureUrl: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg"},
        //             {pictureUrl: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg"}
        //         ]
        //     }
        //     },
        //     {id:2,
        //         footPrint: {
        //             footPrintPicture:[
        //                 {pictureUrl: "https://www.yulumi.cn/gl/uploads/allimg/201128/162003D24-2.jpg"},
        //                 {pictureUrl: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg"}
        //             ]
        //         }
        //     },
        //     {id:3,
        //         footPrint: {
        //             footPrintPicture:[
        //                 {pictureUrl:"https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"},
        //                 {pictureUrl: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg"}
        //             ]
        //         }
        //     },
        //     {id:4,
        //         footPrint: {
        //             footPrintPicture:[
        //                 {pictureUrl:"https://img.zcool.cn/community/01193959eeec64a801202b0c23804b.jpg@1280w_1l_2o_100sh.jpg"},
        //                 {pictureUrl: "https://scpic.chinaz.net/files/pic/pic9/201910/zzpic20739.jpg"}
        //             ]
        //         }
        //     }];

        return (
            <>
            <View>
                <Header_FootPrint />
                <ScrollView width="100%" height={0.85 * h}  mb={0.1 * h}
                _contentContainerStyle={{
                    // px: "20px",
                    mt: "1%",
                    mb: "50px",
                    mr:"0",
                    ml:"0",
                }}>
                    <Flex direction="row"  margin="1%" flexWrap="wrap" justifyContent="space-around">
                        <FlatList  data={posts} numColumns={2}  renderItem={({
                        item
                        }) => <Card info={item}/>
                        } keyExtractor={item => item.id} />
                    </Flex>
                    <Divider /> 
                    <Box textAlign="center" height={0.08 * h}>
                    <Text color="gray.300" size="xl" ml="30%">
                        没有更多啦！w(ﾟДﾟ)w
                    </Text>
                    </Box>
                </ScrollView>
            </View>
            <Footer/>
        </>
        )
    }
        
}

export default BrowseScreen;