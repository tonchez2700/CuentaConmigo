import React, { useState, useEffect, useContext, } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { RegisterStyle } from "../../theme/customTheme";
import DropdownSelect from "../Inputs/DropdownSelect";
import { Icon, Button, Slider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const AddresRegister = ({ data, Catalog, onChangeText }) => {

  const countries = ["Masculino", "Femeninio",]
  const [text, setText] = useState('');

  return (
    <View style={RegisterStyle.container}>
      <Text style={RegisterStyle.TittlePage}>DOMICILIO</Text>
      <View style={{ borderWidth: 2.3, borderColor: '#003C71', padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={[RegisterStyle.ViewBoder, { flex: 1, marginRight: 20 }]}>
            <Text style={RegisterStyle.TextBoder}>Colonia</Text>
            <TextInput
              fontSize={24}
              placeholder="Colonia"
              style={RegisterStyle.Input}
              value={data?.address?.suburb}
              onChangeText={(value) => onChangeText(value, 'suburb', 'address')}
            />
          </View>
          <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
            <Text style={RegisterStyle.TextBoder}>Número</Text>
            <TextInput
              fontSize={24}
              placeholder="Número"
              style={RegisterStyle.Input}
              value={data?.address?.house_number}
              onChangeText={(value) => onChangeText(value, 'house_number', 'address')}
            />
          </View>
        </View>
        <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
          <Text style={RegisterStyle.TextBoder}>Calle</Text>
          <TextInput
            fontSize={24}
            placeholder="Calle"
            style={RegisterStyle.Input}
            value={data?.address?.street}
            onChangeText={(value) => onChangeText(value, 'street', 'address')}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[RegisterStyle.ViewBoder, { flex: 1, marginRight: 20 }]}>
            <Text style={RegisterStyle.TextBoder}>C.P.</Text>
            <TextInput
              fontSize={24}
              maxLength={5}
              placeholder="C.P."
              style={RegisterStyle.Input}
              value={data?.address?.postal_code}
              onChangeText={(value) => onChangeText(value, 'postal_code', 'address')}
            />
          </View>
          <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
            <Text style={RegisterStyle.TextBoder}>Ciudad*</Text>
            <TextInput
              fontSize={24}
              placeholder="Ciudad*"
              style={RegisterStyle.Input}
              value={data?.address?.city}
              onChangeText={(value) => onChangeText(value, 'city', 'address')}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[RegisterStyle.ViewBoder, { flex: 1, marginRight: 20 }]}>
            <Text style={RegisterStyle.TextBoder}>Estado<Text style={{ color: 'red' }}> * </Text></Text>
            <TextInput
              fontSize={24}
              placeholder="Estado"
              style={RegisterStyle.Input}
              value={data?.address?.state}
              onChangeText={(value) => onChangeText(value, 'state', 'address')}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={RegisterStyle.TextDropBoder}>País<Text style={{ color: 'red' }}> * </Text></Text>
            <DropdownSelect
              data={Catalog.countries}
              type={'--Selecciona un país--'}
              value={data?.gender_id}
              fun={(item) => onChangeText(item, 'country_id', 'address')}
            />
          </View>
        </View>
      </View>

    </View>
  )
};
export default AddresRegister;

const styles = StyleSheet.create({});
