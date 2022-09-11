import React from 'react';
import {
    Box, VStack, Flex, Button, CheckBox, Center, Divider, FlatList, Image,
    FormControl, Select, CheckIcon, WarningOutlineIcon, Text, Input, TextArea, KeyboardAvoidingView
} from 'native-base';
import {Dimensions, View} from 'react-native';
import Header_FootPrint from '../components/Header';
import Footer from '../components/Footer';
import {PageSelectProvider} from "../utils/SwitchPage";
import {addPost} from "../utils/Post";
import {storage} from "../utils/Storage";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ReleaseSrceen = (props) => {


    const [tag, settag] = React.useState("足迹");
    const [title, setTitle] = React.useState("New Footprint");
    const [content, setContent] = React.useState(null);
    const [fid, setFid] = React.useState();


    const pic = [{
        id: 1,
        image: "https://www.yulumi.cn/gl/uploads/allimg/201128/162003D24-2.jpg"
    },
        {
            id: 2,
            image: "https://www.yulumi.cn/gl/uploads/allimg/201128/162003D24-2.jpg"
        },
        {
            id: 3,
            image: "https://www.yulumi.cn/gl/uploads/allimg/201128/162003D24-2.jpg"
        },
        {
            id: 4,
            image: "https://www.yulumi.cn/gl/uploads/allimg/201128/162003D24-2.jpg"
        },
        {
            id: 5,
            image: "https://www.yulumi.cn/gl/uploads/allimg/201128/162003D24-2.jpg"
        },
    ];

    return (<PageSelectProvider.Consumer>
            {({Page, SelectPage, Props, SetProps}) => <View>
                <Header_FootPrint/>
                <Flex direction="column" width={w} mt="0">
                    {/*    <Box width={w} height={h * 0.2} _text={{*/}
                    {/*    color: "coolGray.800"*/}
                    {/*}}>*/}
                    {/*<Center>*/}
                    {/*    <Button  variant="subtle" width="90%" colorScheme="primary" borderRadius="full" _text={{*/}
                    {/*color:"coolGray.500"}} mt="3%">*/}
                    {/*        选择希望上传的足迹*/}
                    {/*    </Button>*/}
                    {/*</Center>*/}
                    {/*<Text>中间需要啥？</Text>*/}
                    {/* <FlatList  data={pic} numColumns={2}  renderItem={({
                    item
                    }) => <Box width={0.5 * w} height={0.5 * w} >
                            <Center>
                                <Image width={0.45 * w} height={0.45 * w}
                                        source={{uri:item.image}} borderRadius="xl"alt="null" >
                                </Image>
                            </Center>
                        </Box>
                    } keyExtractor={item => item.id * 3} /> */}
                    {/*</Box>*/}
                    <Box width={w} height={h * 0.1} _text={{
                        color: "coolGray.800"
                    }}>
                        <Center>
                            <FormControl w="90%" isRequired isInvalid borderColor="gray.300" mt="1%">
                                <FormControl.Label mb="0">选择标签</FormControl.Label>
                                <Select onValueChange={(value)=>{console.log("Tag:", value);settag(value);}} minWidth="200" accessibilityLabel="Choose Service" placeholder="选择一个合适的标签吧！"
                                        _selectedItem={{
                                            bg: "primary.400",
                                            width: "100%",
                                            mt: "0",
                                            endIcon: <CheckIcon size={5}/>
                                        }}>
                                    <Select.Item label="运动时刻" value="运动时刻"/>
                                    <Select.Item label="工作途中" value="工作途中"/>
                                    <Select.Item label="自然风光" value="自然风光"/>
                                    <Select.Item label="名胜古迹" value="名胜古迹"/>
                                    <Select.Item label="网红打卡" value="网红打卡"/>
                                </Select>
                            </FormControl>
                        </Center>
                    </Box>
                    <Box height={h * 0.52} width={w} _text={{
                        color: "coolGray.800"
                    }}>
                        <KeyboardAvoidingView>
                            <Input variant="underlined" placeholder="   取一个吸引人的标题吧！" onChangeText={(value)=>{
                                console.log("setTitle",value);
                                setTitle(value)
                            }}/>
                            <Box alignItems="center" w={w}>
                                <TextArea h={h * 0.40} placeholder="请输入正文，不超过30字……" onChangeText={(value)=>setContent(value)}/>
                            </Box>
                        </KeyboardAvoidingView>
                    </Box>
                    <Box width={w} height={h * 0.1} _text={{
                        color: "coolGray.800"
                    }}>
                        <Center>
                            <Button onTouchStart={()=>{
                                console.log("Release submit: title, content, tag", title, content, tag);
                                storage.load("fid", (val)=>{
                                    console.log("fid",val);
                                    addPost(Number(val), title, content, tag);
                                    SelectPage('browse');
                                });
                                // console.log("fid",fid);
                                // if(fid != null)  addPost(Number(fid), title, content, tag);
                            }
                            } variant="subtle" width="90%" colorScheme="primary" borderRadius="full" _text={{
                                color: "coolGray.500"
                            }} mt="1%" >
                                确认发布
                            </Button>
                        </Center>
                    </Box>
                </Flex>
            </View>}
        </PageSelectProvider.Consumer>

    );
}


export default ReleaseSrceen;
