import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TextInput,
    Text, ActivityIndicator
} from 'react-native';
import { Context as RegistrationContext } from '../context/RegistrationContext';
import { Icon, Input, Button } from 'react-native-elements'
import { general } from '../theme/customTheme';
import { useNavigation } from '@react-navigation/native';
import EntryList from '../components/EntryList';
import tw from 'tailwind-react-native-classnames'
import moment from 'moment';

const HomeScreen = () => {


    const navigation = useNavigation();
    const { state, handleInputChange } = useContext(RegistrationContext);

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('blur', () => {
    //   
    //     });
    //     return unsubscribe;
    // }, [navigation]);

    const data = [
        {
            ine: 1234567890,
            id: 1,
            nombre: 'Juan Pérez Juan Pérez'
        },
        {
            ine: 1987654321,
            id: 2,
            nombre: 'María López Juan Pérez'
        },
        {
            ine: 5678901234,
            id: 3,
            nombre: 'Pedro Ramírez Juan Pérez'
        }
    ]

    const renderContent = () => {

        return (
            <View style={{ flex: 1, backgroundColor: '#F7F8FAF', padding: 20, }}>
                <Input
                    fontSize={13}
                    inputContainerStyle={general.Input}
                    placeholder='Buscar....'
                    rightIcon={<Icon type='font-awesome' name='search' size={16} color='#004480' style={{ marginRight: 15 }} />}
                    value={state.dataFrom}
                    onChangeText={(value) => handleInputChange(value, 'document_id')}
                />
                <Button
                    onPress={() => { navigation.navigate('RegisterScreen') }}
                    titleStyle={{ fontSize: 16 }}
                    title={'Agregar INE'}
                    buttonStyle={{ backgroundColor: '#F08013', borderRadius: 4, alignItems: 'center', padding: 10 }}
                />

                <View style={{ flex: 1, flexDirection: 'column', marginTop: '5%', }}>
                    <View style={{ flexDirection: 'row', padding: '2%', backgroundColor: '#F08013' }}>
                        <Text style={{ flex: 1, fontSize: 12, fontWeight: 'bold', color: 'white' }}>No. INE</Text>
                        <Text style={{ flex: 2, fontSize: 12, fontWeight: 'bold', color: 'white' }}>Nombre</Text>
                        <Text style={{ flex: 1, fontSize: 12, fontWeight: 'bold', color: 'white' }}>      </Text>
                    </View>
                    <EntryList data={data} />
                </View >
            </View >

        );
    }

    return (
        !state.fetchingData
            ?
            !state.error
                ?
                renderContent()
                :
                <View style={tw`flex-1 p-5 justify-center items-center`}>
                    <Text style={tw`text-center text-lg mb-3`}>
                        {state.message}
                    </Text>
                    <Button
                        containerStyle={{ width: 120 }}
                        buttonStyle={[{ backgroundColor: '#118ea6' }]}
                        title="Actualizar"
                        onPress={() => navigation.navigate("HomeScreen")}
                    />
                </View>
            :
            <ActivityIndicator size="large" color="#118EA6" style={tw`mt-5`} />
    )
}
export default HomeScreen

const styles = StyleSheet.create({})
