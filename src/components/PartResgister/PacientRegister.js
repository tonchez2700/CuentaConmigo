import React, { useState, useEffect, useContext, } from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput, ActivityIndicator, } from "react-native";
import { RegisterStyle } from "../../theme/customTheme";
import { useNavigation } from "@react-navigation/native";
import MaskInput, { Masks, createNumberMask } from 'react-native-mask-input';
import { Icon, Button, Slider } from "react-native-elements";
import DropdownSelect from "../Inputs/DropdownSelect";
import moment from "moment";


const PatientRegister = ({ data, Catalog, NoFile, onChangeText }) => {

  const navigation = useNavigation();
  const [NumMask, setNum] = useState('');
  const [birthdateMask, setbirthdate] = useState('');
  const date = new Date()
  const initial_date = moment(date).format('DD-MM-YYYY')
  const initial_hours = moment(date).format('hh:mm')

  useEffect(() => {
    onChangeText(moment(date).format('YYYY-MM-DD'), 'admission_date', 'admission')
    onChangeText(initial_hours, 'admission_time', 'admission')
    onChangeText(NoFile.register_number, 'file_number', 'admission')
  }, []);

  return (
    <View style={RegisterStyle.container}>
      <Text style={RegisterStyle.TittlePage}>HOJA DE ADMISIÓN</Text>
      <View style={{ borderWidth: 2.3, borderColor: '#003C71', padding: 10 }}>
        <View style={[RegisterStyle.ViewBoder, { flex: 1, backgroundColor: '#f2f2f2' }]}>
          <Text style={RegisterStyle.TextBoder}>No. Expediente</Text>
          <TextInput
            fontSize={24}
            editable={false}
            style={RegisterStyle.Input}
            value={NoFile.register_number}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[RegisterStyle.ViewBoder, { flex: 1, marginRight: 20, backgroundColor: '#f2f2f2' }]}>
            <Text style={RegisterStyle.TextBoder}>Fecha de admisión<Text style={{ color: 'red' }}> * </Text></Text>
            <TextInput
              fontSize={24}
              editable={false}
              placeholder="Fecha de admisión"
              style={RegisterStyle.Input}
              value={initial_date}
            />
          </View>
          <View style={[RegisterStyle.ViewBoder, { flex: 1, backgroundColor: '#f2f2f2' }]}>
            <Text style={RegisterStyle.TextBoder}>Hora</Text>
            <TextInput
              fontSize={24}
              editable={false}
              placeholder="Hora"
              style={RegisterStyle.Input}
              value={initial_hours}
            />
          </View>
        </View>
        <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
          <Text style={RegisterStyle.TextBoder}>Nombre(s)<Text style={{ color: 'red' }}> * </Text></Text>
          <TextInput
            fontSize={24}
            placeholder="Nombre(s)"
            style={RegisterStyle.Input}
            value={data?.patient?.name}
            onChangeText={(value) => onChangeText(value, 'name', 'patient')}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[RegisterStyle.ViewBoder, { flex: 1, marginRight: 20 }]}>
            <Text style={RegisterStyle.TextBoder}>Apellido paterno<Text style={{ color: 'red' }}> * </Text></Text>
            <TextInput
              fontSize={24}
              placeholder="Apellido Paterno"
              style={RegisterStyle.Input}
              value={data?.patient?.paternal_surname}
              onChangeText={(value) => onChangeText(value, 'paternal_surname', 'patient')}
            />
          </View>
          <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
            <Text style={RegisterStyle.TextBoder}>Apellido materno</Text>
            <TextInput
              fontSize={24}
              placeholder="Apellido Materno"
              style={RegisterStyle.Input}
              value={data?.patient?.maternal_surname}
              onChangeText={(value) => onChangeText(value, 'maternal_surname', 'patient')}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, flex: 1, marginRight: 20 }}>
            <Text style={RegisterStyle.TextDropBoder}>Documento<Text style={{ color: 'red' }}> * </Text></Text>
            <DropdownSelect
              data={Catalog.documents}
              type={'--Documento--'}
              value={data?.patient?.document_id}
              fun={(item) => onChangeText(item, 'document_id', 'patient')}
            />
          </View>
          <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
            <Text style={RegisterStyle.TextBoder}>Número<Text style={{ color: 'red' }}> * </Text></Text>
            <TextInput
              fontSize={24}
              placeholder="Número *"
              style={RegisterStyle.Input}
              value={data?.patient?.document_number}
              onChangeText={(value) => onChangeText(value, 'document_number', 'patient')}
            />
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, marginRight: 20 }}>
            <Text style={RegisterStyle.TextDropBoder}>Sexo<Text style={{ color: 'red' }}> * </Text></Text>
            <DropdownSelect
              data={Catalog.genders}
              type={'Selecciona el Género'}
              value={data?.patient?.gender_id}
              fun={(item) => onChangeText(item, 'gender_id', 'patient')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={RegisterStyle.TextDropBoder}>Estado civil<Text style={{ color: 'red' }}> * </Text></Text>
            <DropdownSelect
              data={Catalog.civil_statuses}
              type={'--Selecciona un estado civil--'}
              value={data?.patient?.civil_status_id}
              fun={(item) => onChangeText(item, 'civil_status_id', 'patient')}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[RegisterStyle.ViewBoder, { flex: 1, marginRight: 20 }]}>
            <Text style={RegisterStyle.TextBoder}>Fecha de nacimiento<Text style={{ color: 'red' }}> * </Text></Text>
            <MaskInput
              fontSize={24}
              maxLength={10}
              placeholder="Fecha de nacimiento"
              style={RegisterStyle.Input}
              mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              keyboardType="numeric"
              value={birthdateMask}
              onChangeText={(masked, unmasked) => {
                if (masked.length == 10) {
                  const [dia, mes, anio] = masked.split("-");
                  const fecha = new Date(anio, mes - 1, dia);
                  onChangeText(moment(fecha).format('YYYY-MM-DD'), 'birthdate', 'patient')
                } else {
                  null
                }
                setbirthdate(masked)
              }}
            />
          </View>
          <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
            <Text style={RegisterStyle.TextBoder}>Edad</Text>
            <TextInput
              fontSize={24}
              placeholder="Edad"
              maxLength={3}
              keyboardType="number-pad"
              style={RegisterStyle.Input}
              value={data?.patient?.age}
              onChangeText={(value) => onChangeText(value, 'age', 'patient')}
            />
          </View>
        </View>
        <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
          <Text style={RegisterStyle.TextBoder}>Correo</Text>
          <TextInput
            fontSize={24}
            style={RegisterStyle.Input}
            keyboardType="email-address"
            placeholder="example@correo.com.mx"
            value={data?.patient?.email}
            onChangeText={(value) => onChangeText(value, 'email', 'patient')}
          />
        </View>
        <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
          <Text style={RegisterStyle.TextBoder}>Teléfono<Text style={{ color: 'red' }}> * </Text></Text>
          <MaskInput
            fontSize={24}
            placeholder="Teléfono"
            maxLength={12}
            style={RegisterStyle.Input}
            mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            keyboardType="numeric"
            value={NumMask}
            onChangeText={(masked, unmasked) => { onChangeText(masked, 'phone', 'patient'), setNum(masked) }}
          />
        </View>
      </View>
    </View>
  )
};
export default PatientRegister;

const styles = StyleSheet.create({});