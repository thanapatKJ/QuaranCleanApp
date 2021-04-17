import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,TextInput } from 'react-native';
import Header from '../components/Header';


export default class QuarantinePlace extends Component {
  constructor(props){
    super(props);
  }
  sendPlaceData = () => {
    Alert.alert("SendPlaceData");
  }
  render(){
    return(
    <SafeAreaView>
      <Header />
      <Text style={styles.title}>Quarantine Place</Text>
        <TextInput
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            style={styles.input}
            placeholder="Latitude"
            keyboardType="numeric"

          />
          <TextInput
            style={styles.input}
            placeholder="Longtitude"
            keyboardType="numeric"

          />
          <TextInput
            style={styles.input}
            placeholder="Detail"
          />
          <Button title="Confirm" onPress={this.sendPlaceData} />
    </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
    title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 36,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    color: 'black'
  },
});