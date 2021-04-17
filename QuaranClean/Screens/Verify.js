import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,TextInput } from 'react-native';
import { fonts } from 'react-native-elements/dist/config';
import Header from '../components/Header';


export default class Verify extends Component {
  render(){
    return(
    <SafeAreaView>
      <Header />
      <Text style={styles.title}>Verify</Text>
      <Text style={styles.title}>20:00</Text>
      <Button title="Press To Verify"/>
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 36,
  },
});