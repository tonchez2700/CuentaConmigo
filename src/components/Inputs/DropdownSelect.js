import React, { useState } from 'react'
import { Text, TouchableOpacity, StyleSheet, Dimensions, ViewBase } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RegisterStyle } from '../../theme/customTheme';
import { Icon } from 'react-native-elements'
import { Dropdown } from 'react-native-element-dropdown';
import { View } from 'react-native-web';

const { width } = Dimensions.get('window');

const DropdownSelect = ({ data, type, value, fun }) => {
    const navigation = useNavigation();
    const [value2, setValue2] = useState(null);

    return (

        <Dropdown
            style={[RegisterStyle.ViewBoder]}
            selectedTextProps
            search={true}
            searchPlaceholder="Buscar..."
            placeholderStyle={{ color: 'gray', fontSize: 24 }}
            selectedTextStyle={{ color: 'black', fontSize: 24 }}
            placeholder={type}
            labelField="name"
            valueField="id"
            value={value}
            data={data}
            onChange={item => {
                fun(item.id)
            }}
        />

    )
}

export default DropdownSelect

const styles = StyleSheet.create({});
