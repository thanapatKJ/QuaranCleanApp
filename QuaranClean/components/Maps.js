// import React, { Component } from 'react';
// import { Platform, StyleSheet, Text, View } from 'react-native';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// export default
// class App extends React.Component {
//   render() {
//     return (
//       <MapView
//          style={{ flex: 1 }}
//          provider={PROVIDER_GOOGLE}
//          showsUserLocation
//          initialRegion={{
//          latitude: 13.819340046771346,
//          longitude: 100.5141860734398,
//          latitudeDelta: 0.0922,
//          longitudeDelta: 0.0421}}
//       />
//     );
//   }
// }
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker, ProviderPropType, Circle } from 'react-native-maps';
import { Alert } from 'react-native';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
class DefaultMarkers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }
  componentDidMount(){
    this.requestLocationPermission();
  }
  requestLocationPermission = async () => {
    if(Platform.OS === 'ios'){
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      console.log('iPhone: ' + response);
      if(response === 'granted'){
        this.locateCurrentPosition();
      }
    }else{
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log('Android: ' + response);
      if(response === 'granted'){
        this.locateCurrentPosition();
      }
    }
  }
  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position =>{
        console.log(JSON.stringify(position));
        let initialPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }
        this.setState({initialPosition});
      },error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }

    )
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          ref={map => this._map=map}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={this.state.initialPosition}
        >
        <Circle center={{
          latitude: 13.72799389329322,
          longitude: 100.54987037054882,
        }} radius= {5} fillColor={'rgba(200,300,200,0.5)'} />
          
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
            {/* <Text>Tap to create a marker of random color</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DefaultMarkers.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default DefaultMarkers;
