import React, {} from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
  } from 'react-native';
  

class ImageList extends React.Component {
 
    state = {
      indexs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  
    render() {
      return(
        <ScrollView >
            {this.state.indexs.map((item, index) => { 
              return(
                <View key = {index}>
                    <Image 
                        source = {{uri: 'https://picsum.photos/200/300?id='+ item + this.props.count}}
                        style={{width: 200, height: 300, marginHorizontal: 80}}
                    /> 
                    <Text style = {styles.title}>
                        картинка {item}
                    </Text>
                </View>
              );
            })}
        </ScrollView>)
    }
  }

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 22,
      height: 100,
    },
  });

export default ImageList;