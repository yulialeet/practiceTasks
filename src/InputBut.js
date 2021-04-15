import React, {Component, useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Button,
  TextInput,
} from 'react-native';


class InputBut extends React.Component {
state = {
    TextExist: ''
}
ButHid = () => {
    {if (this.state.TextExist !== '') {
        return (
            <Button 
                title = 'Готово' 
                onPress = {() =>Alert.alert(this.state.TextExist)}
            />
        )
    }
}}

    render() {
        return (
            <View style = {styles.parent}>
                <View style = {styles.inp}>
                <TextInput 
                    onChangeText = {(text) => {this.setState({TextExist: text})}}
                />
                </View>
                <View style = {styles.but}>{this.ButHid()}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parent: {
        display: 'flex',
        flexDirection: 'row',
        height: 40,
    },
    inp: {
      backgroundColor: '#D8BFD8',
      flex: 2,
    },
    but: {
      width: 150,
      flex: 1,
      top: 5,
    }
  });
export default InputBut;