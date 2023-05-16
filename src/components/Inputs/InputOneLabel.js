import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, TextInput, } from 'react-native'
import { Icon, CheckBox } from 'react-native-elements'
import { ExpendienteStyle } from '../../theme/customTheme'


const InputOneLabel = ({ name, placeholder }) => {
    const [check2, setCheck2] = useState();
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 26, color: '#003C71', fontWeight: 'bold' }}>{name}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        title='Si'
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        iconRight
                        checkedColor='#003C71'
                        textStyle={{ fontSize: 26 }}
                        containerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 0 }}
                        checked={check2 === 0}
                        onPress={() => setCheck2(0)}
                    />
                    <CheckBox
                        title='No'
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checkedColor='#003C71'
                        textStyle={{ fontSize: 26 }}
                        containerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 0 }}
                        iconRight
                        checked={check2 === 1}
                        onPress={() => setCheck2(1)}
                    />
                </View>
            </View>
            <View style={[ExpendienteStyle.PersonalPato, { flex: 1 }, check2 === 1 ? { backgroundColor: '#f2f2f2' } : null]}>
                <TextInput
                    placeholder={placeholder}
                    editable={check2 === 0}
                    value={''}
                />

            </View>
        </View >
    )
}


export default InputOneLabel
