import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, TextInput, } from 'react-native'
import { Stack, CheckBox } from 'react-native-elements'
import { ExpendienteStyle } from '../../theme/customTheme'


const InputThreeLabel = ({ title, input1, input2, input3, placeholder }) => {
    const [check2, setCheck2] = useState();
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 26, color: '#003C71', fontWeight: 'bold' }}>{title}</Text>
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
            <View style={{ flex: 1 }}>
                <View style={[ExpendienteStyle.PersonalPato, { flex: 1 }, check2 === 1 ? { backgroundColor: '#f2f2f2' } : null]}>
                    <TextInput
                        placeholder={placeholder}
                        editable={check2 === 0}
                        value={''}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={[ExpendienteStyle.PersonalPato, { flex: 1 }, check2 === 1 ? { backgroundColor: '#f2f2f2' } : null]}>
                        <TextInput
                            editable={check2 === 0}
                            placeholder='Inicio'
                            value={''}
                        />
                    </View>
                    <View style={[ExpendienteStyle.PersonalPato, { flex: 1 }, check2 === 1 ? { backgroundColor: '#f2f2f2', marginLeft: 20 } : { marginLeft: 20 }]}>
                        <TextInput
                            editable={check2 === 0}
                            placeholder='Suspendió'
                            value={''}
                        />
                    </View>
                </View>
            </View>
        </View >
    )
}


export default InputThreeLabel
