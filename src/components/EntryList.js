import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { general } from '../theme/customTheme';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const EntryList = ({ data, dalete, edit }) => {

    const navigation = useNavigation();
    const sortedData = data.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return (

        <View style={{ marginTop: '2%', borderBottomColor: 'gray', borderRadius: 5, elevation: 5, backgroundColor: 'white', }}>
            <FlatList
                data={sortedData}
                pagingEnabled={true}
                refreshing={true}
                keyExtractor={(item) => item.id.toString()}
                removeClippedSubviews={true}
                initialNumToRender={10}
                renderItem={({ item }) =>
                    <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', borderBottomWidth: 1, borderColor: '#00000029', padding: '2%' }}>
                        <Text style={{ flex: 1, fontSize: 12 }}>{item.ine}</Text>
                        <Text style={{ flex: 2, fontSize: 12 }}>{item.nombre}</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <Icon name='eye' size={16} type='font-awesome-5' color='#6F1FB4' />
                        </View>

                    </View>
                }

            />
        </View>
    )
}

export default EntryList

const styles = StyleSheet.create({

    TextTableItems: {
        fontSize: 13,
        padding: 10,
        textAlign: 'center',
        color: '#000000',
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1

    },
})
