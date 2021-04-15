
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';


export default class App extends React.Component {
  state = {
    count: 0
  }
  CouBut = () => {
    this.setState({count: this.state.count + 1})
  }

render()  {
  return (
  <SafeAreaView>
    <View>
    <View style = {styles.but}>
      <Button 
        color = 'green'
        title = "Тык"
        onPress={this.CouBut}
      />
    </View>
      <Text style = {styles.title}>
        Вы нажали на кнопку <Text style = {styles.ncounter}>{this.state.count}</Text> раз!
      </Text>
    </View>
  </SafeAreaView>
);
      };
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  but: {
    width: 170,
    height: 70,
    marginTop: 200,
    marginLeft:100,
  },
  ncounter: {
    textDecorationLine: 'underline',
    fontStyle: 'italic',
  }
});
