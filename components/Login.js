import * as React from "react";
import {PageSelectProvider} from "../utils/SwitchPage";
import {
    Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider
} from "native-base";
import {authUser} from "../utils/User";
import {storage} from '../utils/Storage';

export class LoginForm extends React.Component{
    static contextType = PageSelectProvider;

    constructor(props) {
        super(props);
        this.state={
            name: "",
            password: "",
        }
    }

    handleLogin(){
        const {name, password} = this.state;
        console.log("state: ", this.state);
        if(name === '') {alert("请输入用户名！"); return;}
        if(password === '') {alert("请输入密码！"); return;}
        console.log("handleLogin", name, password);
        const p = authUser(name, password)
            .then(res => {
                if(res === ""){
                    console.log("FAILED 登录验证失败 ", res);
                    alert("用户名或密码错误！");
                    return;
                }
                if(res.status === 500){
                    console.log("FAILED 登录验证失败 ", res);
                    alert("用户名或密码错误！");
                    return;
                }
                console.log("SUCCESS 登录验证成功 ", res);
                // 存 uid
                storage.save('uid', res);

                // 取 uid
                storage.load('uid', (data) => {
                    alert("uid: "+data);
                })

                this.context.SelectPage('browse');
            })
            .catch(err => {
                console.log('ERROR 登录时连接失败 ');
            });
    }

    render() {
        return (
            <PageSelectProvider.Consumer>
                {({Page, SelectPage}) => (<Center w="100%" margin="auto">
                    <Box safeArea p="2" py="8" w="90%">
                        <Heading size="lg" fontWeight="600" color="cyan.400" _dark={{
                            color: "warmGray.50"
                        }}>
                            欢迎来到足迹！
                        </Heading>
                        <Heading mt="1" _dark={{
                            color: "warmGray.200"
                        }} color="coolGray.600" fontWeight="medium" size="xs">
                            登录之后和我们继续探索吧！
                        </Heading>

                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>用户名</FormControl.Label>
                                <Input onChangeText={(text) => this.setState({name:text})}/>
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>密码</FormControl.Label>
                                <Input type="password" onChangeText={(text) => this.setState({password:text})}/>
                                <Link _text={{
                                    fontSize: "xs", fontWeight: "500", color: "cyan.500"
                                }} alignSelf="flex-end" mt="1">
                                    忘记密码？
                                </Link>
                            </FormControl>
                            <Button onTouchStart={() => {
                                this.handleLogin();
                            }} mt="2" colorScheme="cyan">
                                登录
                            </Button>
                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    我没有账号{" "}
                                </Text>
                                <Link
                                    onPress={()=>SelectPage('register')}
                                    _text={{
                                        color: "cyan.500", fontWeight: "medium", fontSize: "sm"
                                    }}
                                    // href="#"//?
                                >
                                    注册
                                </Link>
                            </HStack>
                        </VStack>
                    </Box>
                </Center>)}
            </PageSelectProvider.Consumer>
        );
    }

};


export default () => {
    return (<Center flex={1} px="3">
        <LoginForm/>
    </Center>);
};
