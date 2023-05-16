import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TextInput,
    Text, ActivityIndicator
} from 'react-native';
import { ExpendienteStyle } from '../theme/customTheme';
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as RegistrationContext } from '../context/RegistrationContext';
import MaskInput, { Masks } from 'react-native-mask-input';
import InputMarkLabel from '../components/Inputs/InputMarkLabel';
import InputOneLabel from '../components/Inputs/InputOneLabel';
import InputTwoLabel from '../components/Inputs/InputTwoLabel';
import InputThreeLabel from '../components/Inputs/InputThreeLabel';

import { AccordionItem } from 'react-native-accordion-list-view';
import AnimetedText from '../components/AnimetedText';
import ModalAlert from '../components/Modal/ModalAlert';
import tw from 'tailwind-react-native-classnames'


const ExpedienteRegistrationScreen = () => {


    const navigation = useNavigation();
    const { state, } = useContext(RegistrationContext);
    const [text, setText] = useState('');
    const [height, setHeight] = useState(35);
    const renderContent = () => {

        return (
            <ScrollView style={ExpendienteStyle.container}>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    <View style={[ExpendienteStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={ExpendienteStyle.TextBoder}>Expediente / Nombre / Apellidos</Text>
                        <TextInput
                            style={ExpendienteStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <View style={[ExpendienteStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={ExpendienteStyle.TextBoder}>Fecha</Text>
                        <TextInput
                            style={ExpendienteStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                </View>

                <View style={[ExpendienteStyle.ViewBoder, { flex: 1 }]}>
                    <Text style={ExpendienteStyle.TextBoder}>Nombre</Text>
                    <TextInput
                        style={ExpendienteStyle.Input}
                        value={text}
                        onChangeText={setText}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    <View style={[ExpendienteStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={ExpendienteStyle.TextBoder}>Fecha de nacimiento</Text>
                        <TextInput
                            style={ExpendienteStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <View style={[ExpendienteStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={ExpendienteStyle.TextBoder}>Edad</Text>
                        <TextInput
                            style={ExpendienteStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    <View style={[ExpendienteStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={ExpendienteStyle.TextBoder}>Número de expediente</Text>
                        <TextInput
                            style={ExpendienteStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <View style={[ExpendienteStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={ExpendienteStyle.TextBoder}>Sexo</Text>
                        <TextInput
                            style={ExpendienteStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                </View>
                <Text style={{ fontSize: 30, textAlign: 'center', color: '#003C71', fontWeight: 'bold' }}>
                    ¿Alergias a algún medicamento, alimento o sustancia?
                </Text>
                <View style={[ExpendienteStyle.ViewBoder, { flex: 1 }]}>
                    <Text style={ExpendienteStyle.TextBoder}>Alergias</Text>
                    <TextInput
                        style={ExpendienteStyle.Input}
                        value={text}
                        onChangeText={setText}
                    />
                </View>


                <AnimetedText title="ANTECEDENTES HEREDOFAMILIARES" content={
                    <View style={{ flex: 1, padding: 10, }}>
                        <InputOneLabel name={'Diabetes'} placeholder={'Parentesco'} />
                        <InputOneLabel name={'Cáncer'} placeholder={'Parentesco'} />
                        <InputOneLabel name={'Cardiopatías'} placeholder={'Parentesco'} />
                        <InputOneLabel name={'Enfermedades tiroideas'} placeholder={'Parentesco'} />
                        <View style={{ flex: 1, marginTop: 20 }}>
                            <Text style={{ fontSize: 26, color: '#003C71', fontWeight: 'bold' }}>Otras enfermedades</Text>
                            <TextInput
                                style={[ExpendienteStyle.InputAcordion, { flex: 1 }]}
                                value={text}
                                onChangeText={setText}
                            />
                            <TextInput
                                value={text}
                                onContentSizeChange={(event) => {
                                    const { height } = event.nativeEvent.contentSize;
                                    setHeight(height);
                                }}
                                style={[ExpendienteStyle.InputAcordion, { flex: 1, marginTop: 15, height: Math.max(100, height) }]}
                                multiline={true}
                                onChangeText={setText}
                            />
                        </View>
                    </View>
                } />
                <AnimetedText title="ANTECEDENTES PERSONALES NO PATOLÓGICOS" content={
                    <View style={{ flex: 1, padding: 10, }}>
                        <InputTwoLabel name={'Realiza actividades físicas'} placeholder1={'Tipo'} placeholder2={'Frecuencia'} mask={false} />
                        <View style={{ flex: 1 }}>
                            <InputThreeLabel
                                title={'Tabaquismo'}
                                input1={'Tabaquismo'}
                                input2={''}
                                input3={''}
                                placeholder={'¿Cuántos al día?'} />
                            <InputThreeLabel
                                title={'Alcoholismo'}
                                input1={'Tabaquismo'}
                                input2={''}
                                input3={''}
                                placeholder={'Tipo'} />
                            <InputThreeLabel
                                title={'Uso de sustancias (drogas)'}
                                input1={'Tabaquismo'}
                                input2={''}
                                input3={''}
                                placeholder={'Tipo'} />
                            <InputOneLabel name={'Uso de medicamentos naturistas'} placeholder={'Especifique'} />
                            <InputOneLabel name={'¿Vacunas o inmunización reciente?'} placeholder={'Especifique'} />
                            <InputOneLabel name={'¿Conoce grupo o RH?'} placeholder={'Especifique'} />
                        </View>
                    </View>
                } />
                <AnimetedText title="Registro de medicamentos utilizados previo al ingreso" content={
                    <View style={{ flex: 1, padding: 10, }}>

                    </View>
                } />
                <AnimetedText title="ANTECEDENTES PERSONALES PATOLÓGICOS" content={
                    <View style={{ flex: 1, padding: 10, }}>
                        <InputOneLabel name={'Hospitalización'} placeholder={'Especifique'} />
                        <InputTwoLabel name={'Cirugías previas'} placeholder1={'Inicio de la enfermedad'} placeholder2={'¿Cuáles?'} mask={true} />
                        <InputMarkLabel name={'Diabetes'} placeholder={'Inicio de la enfermedad'} />
                        <InputMarkLabel name={'Enfermedades tiroides'} placeholder={'Inicio de la enfermedad'} />
                        <InputMarkLabel name={'Hipertensión arterial'} placeholder={'Inicio de la enfermedad'} />
                        <InputMarkLabel name={'Enfermedades pulmonares'} placeholder={'Inicio de la enfermedad'} />
                        <InputMarkLabel name={'Enfermedades neurológicas'} placeholder={'Inicio de la enfermedad'} />
                        <InputMarkLabel name={'Enfermedades de transmisión sexual'} placeholder={'Inicio de la enfermedad'} />
                        <InputMarkLabel name={'Cardiopatía'} placeholder={'Inicio de la enfermedad'} />
                        <InputMarkLabel name={'Cáncer'} placeholder={'Inicio de la enfermedad'} />
                        <InputMarkLabel name={'Transfusiones'} placeholder={'Inicio de la enfermedad'} />
                        <InputTwoLabel name={'Otros'} placeholder1={'Inicio de la enfermedad'} placeholder2={'¿Cuáles?'} mask={true} />

                    </View>
                } />
                <ModalAlert />
            </ScrollView >
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
                        onPress={() => console.log('error')}
                    />
                </View>
            :
            <ActivityIndicator size="large" color="#118EA6" style={tw`mt-5`} />
    )
}
export default ExpedienteRegistrationScreen

const styles = StyleSheet.create({})
