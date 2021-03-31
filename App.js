/*
 * @Author: your name
 * @Date: 2021-03-29 12:56:24
 * @LastEditTime: 2021-03-31 20:00:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /kebiao/App.js
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { Col, Row, Grid } from "react-native-easy-grid";
import React,{ useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [value,setValue] = useState(0)
  const getColor = (value) => {
    switch (value) {
      case 1 : return "#F8E7D7"
      case 2 : return "#F8E3E4"
      case 3 : return "#DCE3F7"
    }
  }
  const list = [
    { 
      size:2
    },
    {
      size:2
    },
    {
      size:2
    },
    {
      size:2
    },
    {
      size:2
    },
    {
      size:2
    },
    {
      size:2
    },
  ]
  const orders = [1,2,3,4,5,6,7,8,9,10,11,12]
  const table = [
    {  
      color:1,
      size:4,
      lenght:1
    },
    {
      color:2,
      size:2,
      lenght:1
    },
    {
      color:2,
      size:2,
      lenght:1
    },
    {
      color:3,
      size:2,
      lenght:1
    },
    {
      color:3,
      size:2,
      lenght:1
    },
  ]
  const getmouth = () => {
    let date = new Date()
    let m = date.getMonth()+1
    return m + "月"
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: "100%"}}>
        <View style={{ height: 30 }}>
          <Grid>
            <Row>
              <Col style={styles.center} size={1}><Text style={{ fontSize: 12 }}>{getmouth()}</Text></Col>
              <Col style={styles.center} size={2}><Text>周一</Text></Col>
              <Col style={styles.center} size={2}><Text>周二</Text></Col>
              <Col style={styles.center} size={2}><Text>周三</Text></Col>
              <Col style={styles.center} size={2}><Text>周四</Text></Col>
              <Col style={styles.center} size={2}><Text>周五</Text></Col>
              <Col style={styles.center} size={2}><Text>周六</Text></Col>
              <Col style={styles.center} size={2}><Text>周日</Text></Col>
            </Row>
          </Grid>
      </View>
        <Grid>
          <Col
            size={1}
          >
            {orders.map(e=>{
              return (
                <Row 
                  style={styles.center}
          
                ><Text>{e}</Text></Row>
              )
            })}
          </Col>
          {list.map((e)=>{
            return (
              <Col
                style={{
                backgroundColor:e.color,
                }}
                key={e.id}
                size={e.size}
              >
                {table.map(e=>{
                  return (
                    <Row
                    size={e.size}
                     style={{
                       display:"flex",
                       justifyContent:"center"
                     }}
                    ><View style={{
                      backgroundColor:getColor(e.color),
                      height:`${95*(e.lenght)}%`,
                      width:"90%",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      shadowColor: "#000",
                      borderRadius:5,
                    }}><Text style={{color:"#FE933B"}}>1</Text></View></Row>
                  )
                })}
              </Col>
            )
          })}
          {/* <Col style={{backgroundColor:"red"}}></Col> */}
        </Grid>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: 5,
    // paddingRight: 5,
  }
});

export default App;
