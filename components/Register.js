import * as React from "react";
import {Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider} from "native-base";
import {PageSelectProvider} from "../utils/SwitchPage";
import {addUser} from "../utils/User";

export class RegisterForm extends React.Component {

    static contextType = PageSelectProvider;

    constructor(props) {
        super(props);
        this.state={
            name: "",
            password: "",
            confirmPassword: "",
            email: "",
            iconUrl: "",
        }
    }

    handleRegister(){
        console.log("handleRegister!");
        const {name, password, email, iconUrl, confirmPassword} = this.state;
        if(name === '') {alert("请输入用户名！"); return;}
        if(password === '') {alert("请输入密码！"); return;}
        if(password !== confirmPassword) {alert("两次密码输入不同！"); return;}
        console.log("handleRegister", name, password, email, iconUrl);
        const p = addUser(name, password, email, iconUrl)
            .then(res => {
                if(res.status === 500){
                    console.log("FAILED 注册失败 ", res);
                    alert("注册失败！");
                    return;
                }
                console.log("SUCCESS 注册成功 ", res);
                alert("注册成功！");
            })
            .catch(err => {
                console.log('ERROR 注册时连接失败 ');
            });
        this.context.SelectPage("home");
    }

    render() {
        console.log("get here!");
        return(
            <PageSelectProvider>
                {({Page, SelectPage}) => (<Center w="100%" margin="auto">
                    <Box safeArea p="2" w="90%" maxW="290" py="8">
                        <Heading size="lg" color="cyan.400" _dark={{
                            color: "warmGray.50"
                        }} fontWeight="semibold">
                            欢迎来到足迹
                        </Heading>
                        <Heading mt="1" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }} fontWeight="medium" size="xs">
                            注册之后和我们一起探索吧！
                        </Heading>
                        <VStack space={3} mt="5">
                            <FormControl>
                                <FormControl.Label>用户名</FormControl.Label>
                                <Input onChangeText={(text) => this.setState({name:text})}/>
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>邮箱</FormControl.Label>
                                <Input onChangeText={(text) => this.setState({email:text})}/>
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>密码</FormControl.Label>
                                <Input type="password" secureTextEntry={true}
                                       onChangeText={(text) => this.setState({password:text})}
                                />
                            </FormControl>
                            <FormControl>
                                <FormControl.Label>确认密码</FormControl.Label>
                                <Input type="password" secureTextEntry={true}
                                       onChangeText={(text) => this.setState({confirmPassword:text})}
                                />
                            </FormControl>
                            <Button mt="2" colorScheme="primary" onPressIn={()=>this.handleRegister()}>
                                注册
                            </Button>
                        </VStack>
                    </Box>
                </Center>)}
            </PageSelectProvider>
        );
    }

};

export default RegisterForm;
