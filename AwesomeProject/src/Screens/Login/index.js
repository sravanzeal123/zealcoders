import React, { Component } from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
    SafeAreaView
} from 'react-native';
import Share from 'react-native-share';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayData: [
                {
                    title: 'TextInput',
                    id: 1
                },
                {
                    title: 'View',
                    id: 2
                },
                {
                    title: 'Touchable Opacity',
                    id: 3
                },
                {
                    title: 'Image',
                    id: 4
                },
                {
                    title: 'Share KIT',
                    id: 5
                },
                {
                    title: 'Image Picker',
                    id: 6
                },
                {
                    title: 'Flat List API Example',
                    id: 7
                },
                {
                    title: 'Flat List Static JSON',
                    id: 8
                },
                {
                    title: 'Document Picker',
                    id: 9
                },
                {
                    title: 'Maps',
                    id: 10
                },
                {
                    title: 'Social Logins',
                    id: 11
                },
                {
                    title: 'Tab Bar',
                    id: 12
                },
                {
                    title: 'Modal Popup',
                    id: 13
                },
                {
                    title: 'Alert',
                    id: 14
                },
                {
                    title: 'ActionSheet',
                    id: 15
                },
                {
                    title: 'Date Picker',
                    id: 16
                },
                {
                    title: 'DropDown',
                    id: 17
                },
                {
                    title: 'Animations',
                    id: 18
                },
            ]
        };
    }

    onPressActionMethod(item, index) {

        if (item.id == 1) {
            this.props.navigation.navigate('TextInput');
        } else if (item.id == 2) {
            this.props.navigation.navigate('View');
        } else if (item.id == 3) {
            this.props.navigation.navigate('TouchableOpacity');
        }
        else if (item.id == 4) {
            this.props.navigation.navigate('Image');
        }
        else if (item.id == 5) {
            let shareOptions = { "title": "Zeal Coders", "url": "https://www.facebook.com/", "message": "Share via" };
            Share.open(shareOptions)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    err && console.log(err);
                });


        }
        else if (item.id == 6) {
            this.props.navigation.navigate('ImagePickerExample');
        }
        else if (item.id == 7) {
            this.props.navigation.navigate('FlatListAPIExample');
        }
        else if (item.id == 8) {
            this.props.navigation.navigate('FlatListStaticJSON');
        }
        else if (item.id == 9) {
            this.props.navigation.navigate('DocumentPicker');
        }
        else if (item.id == 10) {
            this.props.navigation.navigate('Maps');
        }
        else if (item.id == 11) {
            this.props.navigation.navigate('SocialLogins');
        }
        else if (item.id == 12) {
            this.props.navigation.navigate('TabBar');
        } else if (item.id == 13) {
            this.props.navigation.navigate('ModalPopup');
        } else if (item.id == 14) {
            this.props.navigation.navigate('Alert');
        }
        else if (item.id == 15) {
            this.props.navigation.navigate('ActionSheet');
        }
        else if (item.id == 16) {
            this.props.navigation.navigate('DatePicker');
        }
        else if (item.id == 17) {
            this.props.navigation.navigate('DropDown');
        }
        else if (item.id == 18) {
            this.props.navigation.navigate('Animations');
        }
    }


    render() {
        return (
            <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
                <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>Zeal Coders Examples</Text>
                <FlatList
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <TouchableOpacity style={{ flexDirection: 'row', margin: 10 }}
                                    onPress={() => {
                                        this.onPressActionMethod(item, index);
                                    }}>
                                    <Text style={{ color: 'blue' }}>{item.title}</Text>
                                </TouchableOpacity>
                                <View style={{ backgroundColor: 'gray', width: '100%', height: 2 }}>
                                </View>
                            </>
                        );
                    }
                    }
                    data={this.state.arrayData}
                />
            </View>
        );
    }
}
