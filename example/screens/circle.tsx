import * as React from "react";
import {Button, Platform, StyleSheet, Text, View} from "react-native";
import {Circle, MapView} from "react-native-amap3d";

export default class extends React.Component {

    test_trace() {
        this.setState({msg: 'Empty'});

        // fetch('https://tsapi.amap.com/v1/track/service/list?key=af0a2e4471450ab2bba53045fda44818' +
        //     '&sid=661774',
        //     {
        //         method: 'GET',
        //         // headers: {
        //         //     'Accept': 'application/json',
        //         //     'Content-Type': 'application/json',
        //         //     'Authorization': '需要认证',
        //         // },
        //         // body: JSON.stringify({
        //         //     key: "af0a2e4471450ab2bba53045fda44818"
        //         // })
        //     })
        fetch('https://tsapi.amap.com/v1/track/service/add?key=af0a2e4471450ab2bba53045fda44818&name=service6',
            {
                method: 'POST',
                // headers: {
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                //     'Authorization': '需要认证',
                // },
                // body: {
                //     'key': 'af0a2e4471450ab2bba53045fda44818',
                //     'sid' : 661774,
                //     'tid' : 516338830
                //     'trname' : "trace2"
                // }
            })
            .then(response => response.json())
            .then(x => {
                console.log('[MY_INFO]', x);
                for(let key in x){
                    this.setState({msg: this.state.msg + ' ' + key + ' ' + x[key]})
                    if (key == 'data')
                    {
                        console.log(x[key]);
                    }
                }

            })
            .catch(error => {
                console.log('ERROR  ', error);

            });
    };

    render() {
        return (
            <View style={style.body}>
                <View style={style.button}>
                    <Button onPress={() => {this.test_trace()}} title="test_trace"/>
                </View>
                <MapView style={StyleSheet.absoluteFill}>
                    <Circle
                        strokeWidth={5}
                        strokeColor="rgba(0, 0, 255, 0.5)"
                        fillColor="rgba(255, 0, 0, 0.5)"
                        radius={10000}
                        center={{latitude: 39.906901, longitude: 116.397972}}
                    />
                </MapView>
            </View>
        )
    }
};

const style = StyleSheet.create({
    body: {flex: 1},
    logs: {elevation: 8, flex: 1},
    logText: {
        fontFamily: Platform.OS === "ios" ? "menlo" : "monospace",
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    controls: {
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row",
        marginBottom: 16,
    },
    button: {
        flexDirection: "column",
        marginRight: 8,
        marginBottom: 8,
    },
    result: {
        fontFamily: Platform.OS === "ios" ? "menlo" : "monospace",
    },
});
