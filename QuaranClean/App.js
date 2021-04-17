import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Register from './Screens/Register';
import Login from './Screens/Login';
import Profile from './Screens/Profile';
import ChangePassword from './Screens/ChangePassword';
import Home from './Screens/Home';
import QuarantinePlace from './Screens/QuarantinePlace';
import Verify from './Screens/Verify';

const navOptionHandler = () => ({
  headerShown: false
})
const ProfileStack = createStackNavigator();

function ProfileNavigator(){
    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen name="Profile" component={Profile} options={navOptionHandler}/>
            <ProfileStack.Screen name="ChangePassword" component={ChangePassword}/>
        </ProfileStack.Navigator>
    )
}
const Tab = createBottomTabNavigator();

function AppTab(){
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Place" component={QuarantinePlace}/>
            <Tab.Screen name="Verify" component={Verify}/>
            <Tab.Screen name="Profile" component={ProfileNavigator}/>
        </Tab.Navigator>
    )
}
const StackApp = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackApp.Navigator initialRouteName="Login">
                <StackApp.Screen name="Login" component={Login} options={navOptionHandler}/>
                <StackApp.Screen name="Register" component={Register}/>
                <StackApp.Screen name="Tab" component={AppTab} options={navOptionHandler}/>
            </StackApp.Navigator>
        </NavigationContainer>
    );
}