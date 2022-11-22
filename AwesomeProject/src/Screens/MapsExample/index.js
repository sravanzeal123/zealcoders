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
import MapView from 'react-native-maps';

export default class MapsExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />

            </View>
        );
    }
}
