import React, {Component} from 'react';
import {
    Flex,
    ScrollView,
    View,
    Text,
    Divider,
    Box
} from 'native-base';

import {Dimensions} from 'react-native';
import HistoryCard from "../components/Historycard";
import Footer from '../components/Footer';
import Header_FootPrint from "../components/Header";

import {StyleSheet, Button} from "react-native";
import Historycard from "../components/Historycard";

import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import MultiSelect from 'react-native-multiple-select';
import {storage} from "../utils/Storage";
import {getTridByUid, getTraceByUidAndLocation, getTraceByUidAndDatePeriodAndLocation, getTraceByUidAndDatePeriod} from "../utils/FootPrint";
import config from "../utils/config";
import dedupe from "dedupe";


const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const bottom = 0.1 * h;

export default class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            points: [],

            // date range select
            startDate: null,
            endDate: null,
            startDate_str: "",
            endDate_str: "",
            displayedDate: moment(),

            // location select
            allLocations: [],  // 拿回所有 trace 时记录所有 location 并去除重复
            selectedItems: [],  // 每次依据返回的足迹中对应地点信息更新

            // traces
            trace_arr: [],
        };
    }

    uid = null;  // 当前登录用户的 uid


    componentDidMount() {
        // 取 uid
        storage.load('uid', (data) => {
            // TODO：注意此时是异步返回，需要在里面继续通过 uid 查找所有轨迹
            this.uid = data;
            console.log("Footprint History: get uid ", this.uid);
            getTridByUid(this.uid)
                .then(
                    res => {
                        // alert("成功!");
                        console.log('SUCCESS IN getTridByUid return!', res);
                        // 拿回所有 trace 时记录所有 location 并去除重复
                        const allLocations = res.map((trace)=>{
                            return {location: trace.location};
                        });
                        console.log('allLocations ', allLocations);
                        let dedupe = require('dedupe');
                        this.setState({trace_arr: res, allLocations: dedupe(allLocations),  });
                    }
                )
                .catch(err => {
                        console.log('ERROR IN getTridByUid return!', result);
                    }
                )
        })
    }

    updateTraces(startT, endT){
        const {startDate, endDate, selectedItems} = this.state;
        // 检查是否按时间筛选
        const timeFilter = (startDate !== null && endDate !== null);
        // 检查是否按地点筛选
        const locationFilter = (selectedItems.length !== 0);

        if(!timeFilter && !locationFilter){
            getTridByUid(this.uid)
                .then(
                    res => {
                        console.log('SUCCESS IN getTridByUid ', res);
                        this.setState({trace_arr: res})
                    }
                )
                .catch(err => {
                        console.log('ERROR IN getTridByUid ', err);
                    }
                );
        } else if(timeFilter && !locationFilter){
            getTraceByUidAndDatePeriod(this.uid, startT, endT)
                .then(
                    res => {
                        this.setState({trace_arr: res})
                    }
                )
                .catch(err => {
                        console.log('ERROR IN getTraceByUidAndDatePeriod', err);
                    }
                );
        } else if(!timeFilter && locationFilter){
            const location = this.state.selectedItems[0];
            console.log("BEFORE getTraceByUidAndLocation",this.state.selectedItems);
            console.log("BEFORE getTraceByUidAndLocation",location);
            getTraceByUidAndLocation(this.uid, location)
                .then(
                    res => {
                        this.setState({trace_arr: res})
                    }
                )
                .catch(err => {
                        console.log('ERROR IN getTraceByUidAndLocation', err);
                    }
                );
        } else {
            const location = this.state.selectedItems[0];

            getTraceByUidAndDatePeriodAndLocation(this.uid, startT, endT, location)
                .then(
                    res => {
                        this.setState({trace_arr: res})
                    }
                )
                .catch(err => {
                        console.log('ERROR IN getTraceByUidAndDatePeriodAndLocation', err);
                    }
                );

        }




    }


    clearDateRange(){
        this.setState({
            startDate: null,
            endDate: null,
            startDate_str: "",
            endDate_str: "",
            displayedDate: moment(),
        });
    }

    filterByDateRange() {
        const {startDate, endDate, trace_arr} = this.state;
        if(startDate === null || endDate === null) return;
        const t1 = startDate.format(config.dateFormat);
        const t2 = endDate.format(config.dateFormat);
        // 分别比较与基准日期相差的天数
        const startT = startDate.diff(moment(config.baseDate), 'days');
        const endT = endDate.diff(moment(config.baseDate), 'days');

        console.log("开始日期：", t1, startT);
        console.log("结束日期：", t2, endT);

        this.updateTraces(startT, endT);

        this.setState({
            startDate_str: t1,
            endDate_str: t2,
        });

    }


    // date range select
    setDates = (dates) => {
        this.setState({
            ...dates,
        }, ()=>{
            this.filterByDateRange();
        });
    };

    // location select
    onSelectedItemsChange = selectedItems => {
        this.setState({selectedItems},()=>{
            const {startDate, endDate} = this.state;
            const startT = (startDate === null || endDate === null) ? -1 :startDate.diff(moment(config.baseDate), 'days');
            const endT = (startDate === null || endDate === null) ? -1 : endDate.diff(moment(config.baseDate), 'days');
            this.updateTraces(startT, endT);
        });
    };

    render() {
        const {trace_arr, startDate, endDate, startDate_str, endDate_str, displayedDate, selectedItems, allLocations} = this.state;
        console.log(startDate, endDate);
        console.log('test for trace_arr:', trace_arr);
        const dateRange = (startDate_str !== "") ? <Text style={{color:'gray'}}>{startDate_str} 至 {endDate_str}</Text> : <Text style={{color:'gray'}}>按照时间区间筛选足迹</Text>
        return (
            <View style={{flex: 1}}>
                <Header_FootPrint/>
                <View>
                    {/*TODO:多选*/}
                    {/*<MultiSelect*/}
                    {/*    hideTags*/}
                    {/*    items={allLocations}*/}
                    {/*    uniqueKey="location"*/}
                    {/*    ref={(component) => {*/}
                    {/*        this.multiSelect = component*/}
                    {/*    }}*/}
                    {/*    onSelectedItemsChange={this.onSelectedItemsChange}*/}
                    {/*    selectedItems={selectedItems}*/}
                    {/*    selectText="    按照地点筛选足迹"*/}
                    {/*    searchInputPlaceholderText="搜索地点..."*/}
                    {/*    onChangeInput={(text) => console.log(text)}*/}
                    {/*    // altFontFamily="ProximaNova-Light"*/}
                    {/*    tagRemoveIconColor="gray"*/}
                    {/*    tagBorderColor="gray"*/}
                    {/*    tagTextColor="gray"*/}
                    {/*    selectedItemTextColor="gray"*/}
                    {/*    selectedItemIconColor="gray"*/}
                    {/*    itemTextColor="#000"*/}
                    {/*    displayKey="location"*/}

                    {/*    // TODO: 1. Tag 内容似乎只支持英文字母，不支持中文字符*/}
                    {/*    //       2. 修改颜色*/}

                    {/*    searchInputStyle={{color: '#CCC'}}*/}
                    {/*    submitButtonColor="gray"*/}
                    {/*    submitButtonText="确定"*/}
                    {/*/>*/}
                    <MultiSelect
                        // TODO: 解决无法不显示 tag 的问题
                        single
                        hideTags
                        hideSubmitButton={true}
                        items={allLocations}
                        uniqueKey="location"
                        ref={(component) => {
                            this.multiSelect = component
                        }}
                        onSelectedItemsChange={this.onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText="    按照地点筛选足迹"
                        searchInputPlaceholderText="搜索地点..."
                        onChangeInput={(text) => console.log(text)}
                        selectedItemTextColor="gray"
                        selectedItemIconColor="gray"
                        itemTextColor="#000"
                        displayKey="location"
                        searchInputStyle={{color: '#CCC'}}
                    />
                    <View>
                        {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
                    </View>
                </View>


                <DateRangePicker
                    onChange={this.setDates}
                    endDate={endDate}
                    startDate={startDate}
                    displayedDate={displayedDate}
                    presetButtons={true}
                    range
                >
                    <View>
                        <View style={styles.button}>
                            <Text style={{color: 'gray'}}>{dateRange}</Text>
                        </View>
                    </View>

                </DateRangePicker>


                <ScrollView width="100%" mt="0" mb={0.1 * h} height={h * 0.8}
                            _contentContainerStyle={{
                                mt: "1%",
                                mb: bottom,
                                mr: "0",
                                ml: "0",
                            }}>
                    <Flex direction="column" margin="auto" justifyContent="center">
                        {
                            // trid.map((TRID) => {
                            //         return <Historycard id={TRID}/>
                            //     }
                            this.state.trace_arr.map((trace) => {
                                    return <Historycard id={trace.trid} trace={trace} fid={trace.fid}/>
                                }
                            )
                        }
                    </Flex>
                    <Divider/>
                    <Box textAlign="center" height={0.08 * h}>
                        <Text color="gray.300" size="xl" ml="30%">
                            没有更多啦！w(ﾟДﾟ)w
                        </Text>
                    </Box>
                </ScrollView>

                <Footer/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#fff",
        alignItems: "center",
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
        paddingTop: 2.5,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        // width: '80%',
        height: 30,
        fontWeight: 'bold',
        fontSize: '15',
    },
});
