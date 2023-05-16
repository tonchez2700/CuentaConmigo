import React, { useState, useEffect, useContext, } from "react";
import {
  StyleSheet, View, ScrollView, TouchableOpacity,
  Text, TextInput, ActivityIndicator, Animated,
} from "react-native";
import { RegisterStyle } from "../theme/customTheme";
import { Icon, Button, Slider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Context as RegistrationContext } from '../context/RegistrationContext';
import tw from "tailwind-react-native-classnames";
import PatientRegister from "../components/PartResgister/PacientRegister";
import AddresRegister from "../components/PartResgister/AddresRegister";
import ContactsRegister from "../components/PartResgister/ContactsRegister";
import MedicalExpenses from "../components/PartResgister/MedicalExpenses";
import AllergiesForm from "../components/PartResgister/AllergiesForm";
import ServicesRegister from "../components/PartResgister/ServicesRegister";

const RegisterScreen = () => {

  const navigation = useNavigation();
  const { state, handleInputChange, storePxPatients } = useContext(RegistrationContext);
  const [text, setText] = useState('');

 
  const renderContent = () => {
    return (
      <View style={RegisterStyle.container}>
        <ScrollView>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>

              <Text style={RegisterStyle.TextBoder}>Expediente / Nombre / Apellidos</Text>
              <TextInput
                fontSize={24}
                style={RegisterStyle.Input}
                value={text}
                onChangeText={setText}
              />
            </View>
            <Button
              onPress={() => { navigation.navigate('PhotoScreen') }}
              icon={{ name: 'qrcode', type: 'font-awesome', size: 34, color: 'white', }}
              titleStyle={{ fontSize: 26, marginLeft: 5 }}
              title={'LEER CREDENCIAL'}
              buttonStyle={{ backgroundColor: '#003C71', borderRadius: 4, alignItems: 'center', padding: 10 }}
            />
          </View>
          {
            state.catalog != undefined
              ?
              <View>
                <PatientRegister
                  data={state.dataFrom}
                  Catalog={state.catalog}
                  NoFile={state.file_number}
                  onChangeText={(value, typedata, category) => handleInputChange(value, typedata, category)}
                />
                <AddresRegister
                  data={state.dataFrom}
                  Catalog={state.catalog}
                  onChangeText={(value, typedata, category) => handleInputChange(value, typedata, category)} />
                <ContactsRegister
                  data={state.dataFrom}
                  Catalog={state.catalog}
                  onChangeText={(value, typedata, category) => handleInputChange(value, typedata, category)} />
                <MedicalExpenses
                  data={state.dataFrom}
                  onChangeText={(value, typedata, category) => handleInputChange(value, typedata, category)} />
                <AllergiesForm
                  data={state.dataFrom}
                  onChangeText={(value, typedata, category) => handleInputChange(value, typedata, category)} />
                <ServicesRegister
                  data={state.dataFrom}
                  onChangeText={(value, typedata, category) => handleInputChange(value, typedata, category)} />
              </View>
              : null
          }

          <View style={[{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: '3%' }]}>


            <Button
              title="Cancelar"
              titleStyle={{ fontSize: 24 }}
              containerStyle={{ width: '45%' }}
              buttonStyle={{ backgroundColor: '#848484' }}
              onPress={() => navigation.goBack()} />

            <Button
              title="Guardar"
              titleStyle={{ fontSize: 24 }}
              containerStyle={{ width: '45%' }}
              buttonStyle={{ backgroundColor: '#004480' }}
              onPress={() => storePxPatients(state.dataFrom)} />
          </View>

        </ScrollView>
      </View>
    );
  };

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
            onPress={() => setDataAccount()}
          />
        </View>
      :
      <ActivityIndicator size="large" color="#118EA6" style={tw`mt-5`} />
  )
};
export default RegisterScreen;

const styles = StyleSheet.create({});
