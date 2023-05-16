import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, TextInput, } from 'react-native'
import { Stack, CheckBox } from 'react-native-elements'
import { ExpendienteStyle } from '../../theme/customTheme'
import MaskInput, { Masks } from 'react-native-mask-input';

const InputTwoLabel = ({ name, placeholder1, placeholder2, mask }) => {
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
            {
                mask
                    ?
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            <View style={[ExpendienteStyle.PersonalPato, { flex: 1 }, check2 === 1 ? { backgroundColor: '#f2f2f2' } : null]}>
                                < MaskInput
                                    value={'12/04/1995'}
                                    mask={Masks.DATE_DDMMYYYY}
                                    keyboardType="numeric"
                                    onChangeText={(masked, unmasked) => console.log(masked)}
                                />
                            </View>
                            <View style={[ExpendienteStyle.PersonalPato, { flex: 1 }, check2 === 1 ? { backgroundColor: '#f2f2f2', marginLeft: 20 } : { marginLeft: 20 }]}>
                                <TextInput
                                    placeholder={placeholder2}
                                    value={''}
                                />
                            </View>
                        </View>
                    </View>
                    :
                    <View style={{ flex: 1 }}>
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
            }

        </View >
    )
}


export default InputTwoLabel
