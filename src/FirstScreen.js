import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import ImageList from './ImageList.js';
import InputBut from './InputBut.js';


class FirstScreen extends React.Component {
  state = {
    count: 0
  };

  updateCount = () => {
    this.setState(({count: this.state.count + 1}))
    this.forceUpdate
  }
  render() {
    return(
      <SafeAreaView style = {{flex: 1}}>
        <View>
          <InputBut />
        </View>
        <View style = {styles.but}>
          <Button 
            color = 'black'
            title = "Поменять картинки"
            onPress = {this.updateCount } 
          />
        </View>
        <ImageList count = {this.state.count} />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  but: {
    height: 40,
    marginTop: 5,
  },
  vie: {
    paddingTop: 1,
  }
});

export default FirstScreen;
