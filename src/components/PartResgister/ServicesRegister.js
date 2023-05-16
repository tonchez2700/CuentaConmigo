import React, { useState, useEffect, useContext, } from "react";
import { StyleSheet, View, Text, TextInput, } from "react-native";
import { RegisterStyle } from "../../theme/customTheme";
import { Icon, Button, Slider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

const ServicesRegister = ({ data, onChangeText }) => {

  const navigation = useNavigation();
  const countries = ["Masculino", "Femeninio",]
  const [text, setText] = useState('');

  return (
    <View style={RegisterStyle.container}>
      <Text style={RegisterStyle.TittlePage}>SERVICIOS</Text>
      <View style={{ borderWidth: 2.3, borderColor: '#003C71', padding: 10 }}>
        <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
          <Text style={RegisterStyle.TextBoder}>Servicios</Text>
          <TextInput
            fontSize={24}
            placeholder="Servicios"
            style={RegisterStyle.Input}
            value={data?.admission?.services}
            onChangeText={(value) => onChangeText(value, 'services', 'admission')}
          />
        </View>
      </View>
    </View>
  )
};
export default ServicesRegister;

const styles = StyleSheet.create({});
