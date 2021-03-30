/*
 * @Author: your name
 * @Date: 2021-03-29 12:56:24
 * @LastEditTime: 2021-03-29 22:04:48
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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: "100%"}}>
        {/* {}
        <Grid>
          <Col style={{backgroundColor:"red"}}></Col>
          <Col style={{backgroundColor:"yellow"}}></Col>
        </Grid> */}
        <View><Text>{value}</Text></View>
        <View onPress={()=>{
          setValue(2)
          Alert.alert("clicked")
        }}
        style={{backgroundColor:"red"}}
        ><Text>click</Text></View>
        <Button
          title="Press me"
          onPress={() =>{
            setValue(value+1)
          }}
          style={{
            color:"black"
          }}
        />
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
});

export default App;
