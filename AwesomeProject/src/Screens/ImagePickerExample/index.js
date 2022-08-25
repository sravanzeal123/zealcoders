import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default class ImagePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData:{},
    };
  }

  openImagePickerAsync = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({imageData: image});
      console.log(image);
    });
  };

  render() {
    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
        <TouchableOpacity 
        style={{backgroundColor:'red',height:50,width:"100%",alignItems:'center',justifyContent:'center'}}
        onPress={() => {
          this.openImagePickerAsync();
        }}>
          <Text>
            Upload Image
          </Text>
        </TouchableOpacity>


        <Image
        source={{uri: this.state.imageData.path}}
        style={{width: this.state.imageData.width, height: this.state.imageData.height,backgroundColor:'red',margin:30}}
        >
        </Image>
      </View>
    );
  }
}
