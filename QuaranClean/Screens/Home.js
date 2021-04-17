import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,TextInput } from 'react-native';
import Header from '../components/Header';
import DefaultMarkers from '../components/Maps';


export default class Home extends Component {
  render(){
    return(
    <View>
      <Header />
      <DefaultMarkers />
    </View>
    );
  }
}