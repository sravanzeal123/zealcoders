import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: '#cccccc', flex: 1 }}>
        <TouchableOpacity onPress={()=>{

            this.props.navigation.navigate('NewsList')
        }}>
        <Text style={{ fontSize: 30 }}> News List </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
