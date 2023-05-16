import React, { useState, useEffect, useContext, } from "react";
import {
    StyleSheet, View, ScrollView, TouchableOpacity,
    Text, TextInput, ActivityIndicator, Animated,
} from "react-native";
import { RegisterStyle } from "../theme/customTheme";
import { Icon, Button, Slider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Context as RegistrationContext } from '../context/RegistrationContext';
import EntryList from "../components/EntryList";
import tw from "tailwind-react-native-classnames";

const RegisterHomeScreen = () => {


    const navigation = useNavigation();
    const { state, } = useContext(RegistrationContext);
    const [text, setText] = useState('');

    return (
        <View style={RegisterStyle.container}>
            <ScrollView
                style={{ padding: 10 }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={[RegisterStyle.ViewBoder, { flex: 1, marginRight: '2%' }]}>

                        <Text style={RegisterStyle.TextBoder}>Expediente / Nombre / Apellidos</Text>
                        <TextInput
                            fontSize={24}
                            placeholder="Buscar"
                            style={RegisterStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <Button
                        onPress={() => { navigation.navigate('PhotoScreen') }}
                        icon={{ name: 'plus', type: 'font-awesome', size: 34, color: 'white', }}
                        titleStyle={{ fontSize: 26, marginLeft: 5 }}
                        title={'AGREGAR PACIENTE'}
                        buttonStyle={{ backgroundColor: '#003C71', borderRadius: 4, alignItems: 'center', padding: 10 }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'column', marginTop: '5%' }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 21, fontWeight: 'bold' }}>Expediente</Text>
                        <Text style={{ flex: 2, fontSize: 21, fontWeight: 'bold' }}>Nombre Completo</Text>
                        <Text style={{ flex: 1, fontSize: 21, fontWeight: 'bold' }}>Fecha</Text>
                        <Text style={{ flex: 1, fontSize: 21, fontWeight: 'bold' }}>Acciones</Text>
                    </View>
                    <EntryList data={state.listPatients} />
                </View >
            </ScrollView >
        </View >

    )
}
export default RegisterHomeScreen

const styles = StyleSheet.create({})

