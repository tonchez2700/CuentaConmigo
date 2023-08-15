import React, { useState, useEffect, useContext, } from "react";
import {
  StyleSheet, View, ScrollView, TextInput,
  Text, TouchableOpacity, Image
} from "react-native";
import { RegisterStyle } from "../theme/customTheme";
import { Icon, Button, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Context as RegistrationContext } from '../context/RegistrationContext';
import MaskInput, { Masks } from 'react-native-mask-input';
import DropD from "../components/Forms/DropD";

const RegisterScreen = () => {

  const navigation = useNavigation();
  const { state, handleInputChange, } = useContext(RegistrationContext);
  const [text, setText] = useState('');
  const data = [
    {
      ine: 1234567890,
      id: 1,
      name: 'Premio 1'
    },
    {
      ine: 1987654321,
      id: 2,
      name: 'Premio 2'
    },
    {
      ine: 5678901234,
      id: 3,
      name: 'Premio 3'
    }
  ]
  console.log(state.dataFrom?.age);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#F5F5F5', padding: 10 }}
      showsVerticalScrollIndicator={false}
      resizeMode="cover" >
      <View style={{ flex: 1, margin: 10, padding: 20, backgroundColor: 'white', elevation: 5, }}>
        <Text style={RegisterStyle.TextTittle}>INE</Text>
        <View style={[RegisterStyle.TextInput, { flexDirection: 'row', justifyContent: "space-between" }]}>
          <TextInput
            fontSize={12}
            placeholder='Cargar fotografía'
            value={state.dataFrom?.document_id}
            onChangeText={(value) => handleInputChange(value, 'document_id')}
          />
          <TouchableOpacity onPress={() => navigation.navigate('PhotoScreen')} style={{ justifyContent: 'center' }}>
            <Icon type='font-awesome' name='camera' size={20} color='#6F1FB4' />
          </TouchableOpacity>
        </View>
        {
          state.dataFrom != null
            ?
            <Image style={{ height: 200, resizeMode: 'stretch', }} source={{ uri: "data:image/jpg;base64," + state.dataFrom?.image }} />
            : null
        }

        <Text style={RegisterStyle.TextTittle}>Nombre</Text>
        <TextInput
          fontSize={12}
          style={RegisterStyle.TextInput}
          placeholder='Nombre'
          value={state.dataFrom?.name}
          onChangeText={(value) => handleInputChange(value, 'name')}
        />
        <Text style={RegisterStyle.TextTittle}>Apellidos</Text>
        <TextInput
          fontSize={12}
          style={RegisterStyle.TextInput}
          placeholder='Apellidos'
          value={state.dataFrom?.apellidos}
          onChangeText={(value) => handleInputChange(value, 'apellidos')}
        />
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, }}>
            <Text style={RegisterStyle.TextTittle}>Edad</Text>
            <TextInput
              fontSize={12}
              style={RegisterStyle.TextInput}
              placeholder='Edad'
              keyboardType="numeric"
              value={`${state.dataFrom?.age}`}
              onChangeText={(value) => handleInputChange(value, 'age')}
            />
          </View>
          <View style={{ flex: 2, marginLeft: 15 }}>
            <Text style={RegisterStyle.TextTittle}>Fecha de nacimiento</Text>
            < MaskInput
              fontSize={12}
              style={RegisterStyle.TextInput}
              iconRight
              placeholder='dd / mm / aaaa'
              mask={Masks.DATE_DDMMYYYY}
              value={`${state.dataFrom?.birthdate}`}
              keyboardType="numeric"
              onChangeText={(masked, unmasked) => handleInputChange(value, 'document_id')}
            />

          </View>
        </View>
        <Text style={RegisterStyle.TextTittle}>Dirección</Text>
        <TextInput
          fontSize={12}
          style={RegisterStyle.TextInput}
          placeholder='Dirección'
          value={state.dataFrom?.address}
          onChangeText={(value) => handleInputChange(value, 'address')}
        />
        <Text style={RegisterStyle.TextTittle}>Premios</Text>
        <DropD
          data={data}
          type={'Premios'}
          value={state.dataFrom?.premio}
          fun={(item) => handleInputChange(item, 'premio')}
        />
        <Button
          onPress={() => { navigation.navigate('HomeScreen') }}
          titleStyle={{ fontSize: 16 }}
          title={'Aceptar'}
          containerStyle={{ width: '80%', alignSelf: 'center', flex: 2 }}
          buttonStyle={{ backgroundColor: '#F08013', borderRadius: 9, alignItems: 'center', padding: 10 }}
        />
      </View>
    </ScrollView >
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({});
