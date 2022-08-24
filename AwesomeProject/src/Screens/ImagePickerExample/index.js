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

export default class ImagePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <TouchableOpacity>
          <Text>
            Upload Image
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
