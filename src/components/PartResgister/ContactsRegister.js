import React, { useState, useEffect, useContext, } from "react";
import { StyleSheet, View, Text, TextInput, } from "react-native";
import { RegisterStyle } from "../../theme/customTheme";
import DropdownSelect from "../Inputs/DropdownSelect";
import MaskInput, { Masks, createNumberMask } from 'react-native-mask-input';
import { Icon, Button, Slider } from "react-native-elements";
import moment from "moment";

const ContactsRegister = ({ data, Catalog, onChangeText }) => {

  const [NumMask, setNum] = useState('');

  return (
    <View style={RegisterStyle.container}>
      <Text style={RegisterStyle.TittlePage}>CONTACTOS</Text>
      <View style={{ borderWidth: 2.3, borderColor: '#003C71', padding: 10 }}>
        <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
          <Text style={RegisterStyle.TextBoder}>Persona responsable</Text>
          <TextInput
            fontSize={24}
            placeholder="Persona responsable"
            style={RegisterStyle.Input}
            value={data?.contact?.name1}
            onChangeText={(value) => onChangeText(value, 'name1', 'contact')}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, marginRight: 20 }}>
            <Text style={RegisterStyle.TextDropBoder}>Parentesco<Text style={{ color: 'red' }}> * </Text></Text>
            <DropdownSelect
              data={Catalog.relations}
              type={'--Selecciona un parentesco--'}
              value={data?.contact?.relation1_id}
              fun={(item) => onChangeText(item, 'relation1_id', 'contact')}
            />
          </View>
          <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
            <Text style={RegisterStyle.TextBoder}>Teléfono</Text>
            <MaskInput
              fontSize={24}
              placeholder="Teléfono"
              style={RegisterStyle.Input}
              mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              keyboardType="numeric"
              value={NumMask}
              onChangeText={(masked, unmasked) => { onChangeText(unmasked, 'phone1', 'contact'), setNum(unmasked) }}
            />
          </View>
        </View>
      </View>
    </View>
  )
};
export default ContactsRegister;

const styles = StyleSheet.create({});
