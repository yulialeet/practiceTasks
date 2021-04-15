import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import {Rests} from './DataRestaurants.js';

function RestaurantsList() {
            return (
                <View style = {styles.firview}>
                    <FlatList
                        data = {Rests}
                        renderItem = {({item}) => (
                            <View style = {styles.container}>  
                            <View style = {styles.alltext}>
                                <Text style = {styles.namerest}>{item.name}</Text>
                                <Text style = {styles.comm}>Время работы: </Text>
                                <Text style = {styles.notcomm}>{item.worktime}</Text>
                                <Text style = {styles.comm}>Стоимость доставки: </Text>
                                <Text style = {styles.notcomm}>{item.delprice} руб.</Text>
                            </View>
                                <View style = {styles.imagecont}><Image
                                    source = {{uri: item.img}}
                                    style = {styles.images}
                                /></View>
                            
                            
                            
                            </View>
                        )}
                    />
                </View>
            )
        
}

const styles = StyleSheet.create({
    firview: {
        flex: 1,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'white',
        marginVertical: 6,
        marginHorizontal: 10,
        borderRadius: 30,
        elevation: 10,
    },
    alltext: {
        flex: 2,
    },
    namerest: {
        marginLeft: 20,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#d13800',
        textShadowColor: 'black',
        textShadowRadius: 2,

    },
    imagecont: {
        flex: 1,
        justifyContent: 'flex-end',
        marginVertical: 10,
        marginHorizontal: 20,
        marginRight: 30,
        marginTop: 40,
    },
    images: {
        width: 120,
        height: 120,
        borderRadius: 10,

    },
    comm: {
        fontSize: 15,
        padding: 5,
    },
    notcomm: {
        backgroundColor: '#d13800',
        color: 'white',
        borderRadius: 15,
        padding: 5,
        textAlign: 'center',
    }
  });

export default RestaurantsList