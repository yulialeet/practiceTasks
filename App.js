
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import ImageList from './src/ImageList.js';
import InputBut from './src/InputBut.js';


class App extends React.Component {
  state = {
    count: 0
  };

  updateCount = () => {
    this.setState(({count: this.state.count + 1}))
  }
  render() {
    return(
      <SafeAreaView>
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

export default App;
