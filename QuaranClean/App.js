import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export default
class App extends React.Component {
  render() {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 13.819340046771346,
         longitude: 100.5141860734398,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      />
    );
    
  }
}
