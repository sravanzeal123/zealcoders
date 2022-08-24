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

export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: '#cccccc', flex: 1 }}>
        <Text style={{ fontSize: 30 }}>NEWS LIST Screen</Text>
      </View>
    );
  }
}
