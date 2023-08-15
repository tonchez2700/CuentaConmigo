import React, { useContext } from 'react'
import { StyleSheet, Text, View, Alert, ScrollView, Image, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon, Input, SocialIcon } from 'react-native-elements'
import InputForm from '../components/Forms/InputForm';
import ButtonFrom from '../components/Forms/ButtonFrom';
import { Context as AuthContext } from '../context/AuthContext';
import { AuthSchema } from './../config/schemas';
import useHandleOnChangeTextInput from './../hooks/useHandleOnChangeTextInput';
import SimpleNavBar from '../components/SimpleNavBar'
import { useNavigation } from '@react-navigation/native';
import Images from '@assets/images';
import { Facebook } from 'react-native-openanything';

const AuthScreen = () => {
    const navigation = useNavigation();
    const { state, signin, clearState } = useContext(AuthContext);
    const [inputState, handleInputChange] = useHandleOnChangeTextInput(AuthSchema);
    const data = [{ type: 'facebook' }, { type: 'google' }]
    return (


        <View style={[tw`h-full items-center`, { backgroundColor: '#F5F5F5' }]}>
            <ScrollView contentContainerStyle={tw`items-center`}>

                <SimpleNavBar />

                <Text style={[tw`text-3xl mt-10 font-bold`, { color: '#004480' }]}>Iniciar Sesión</Text>
                <View style={tw`w-4/5 mt-8`}>
                    <InputForm
                        maxLength={50}
                        name='username'
                        placeholder='Correo electrónico'
                        leftIcon={<Icon type='font-awesome' name='envelope' size={25} color='#00000029' style={{ marginRight: 15 }} />}
                        inputContainerStyle={styles.input} keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={(value) => handleInputChange(value, 'email')} />
                    <InputForm
                        maxLength={15}
                        name='password'
                        leftIcon={<Icon type='font-awesome' name='lock' size={25} color='#00000029' style={{ marginRight: 15 }} />}
                        inputContainerStyle={styles.input}
                        placeholder='Contraseña'
                        secureTextEntry={true}
                        onChangeText={(value) => handleInputChange(value, 'password')} />
                    <Text style={[tw`text-xs mb-10 font-bold `, { color: '#707070', textAlign: 'center' }]}>¿Olvidaste tu contraseña? Da click
                        <Text style={[tw`text-xs mb-10 font-bold `, { color: '#F08013', textAlign: 'center' }]}>aquí</Text>
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center' }} />
                        <Text style={{ alignSelf: 'center', paddingHorizontal: 5, fontWeight: '700', fontSize: 14 }}>o inicia sesión con</Text>
                        <View style={{ backgroundColor: 'black', height: 1, flex: 1, alignSelf: 'center' }} />
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginVertical: 10, marginBottom: 30 }}>
                        <TouchableOpacity
                            style={{ ...styles.googleStyle }}
                            onPress={() => onPress('Google')} >
                            <Image
                                source={Images.iconGoogle}
                                style={{ ...styles.imageIconStyle }}
                            />
                            <Text style={{ ...styles.textStyle }}>Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...styles.googleStyle }}
                            onPress={() => onPress('Google')} >
                            <Image
                                source={Images.iconoFacebook}
                                style={{ ...styles.imageIconStyle }}
                            />
                            <Text style={{ ...styles.textStyle }}> Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <ButtonFrom
                        handleSubmit={() => {
                            signin(inputState);
                        }}
                        loading={state.fetchingData ? true : false}
                    />
                    <View style={tw`items-center`}>
                        <Text style={[tw`text-xs mb-10 font-bold `, { color: '#707070', textAlign: 'center' }]}>Al crear tu cuenta estas aceptando nuestros
                            <Text style={[tw`text-xs mb-10 font-bold `, { color: '#F08013', textAlign: 'center' }]}>{"\n"} Términos de uso </Text >y
                            < Text style={[tw`text-xs mb-10 font-bold `, { color: '#F08013', textAlign: 'center' }]}> Política de privacidad.</Text>
                        </Text>
                    </View>
                </View>
                {
                    state.error === true
                        ?
                        Alert.alert(
                            "Error de Autentificacion",
                            state.message,
                            [{
                                text: "OK",
                                onPress: clearState
                            }]
                        )
                        :
                        null
                }

            </ScrollView>
        </View>


    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
    },
    input: {
        backgroundColor: 'white',
        padding: 9,
        borderBottomColor: 'gray',
        paddingLeft: 20,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        borderBottomColor: 'white'
    },
    googleStyle: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderWidth: 0.5,
        borderColor: "#fff",
        height: 50,
        width: '40%',
        padding: 14,
        borderRadius: 3,
    },
    imageIconStyle: {
        height: 30,
        width: 30,
        resizeMode: "stretch"
    },
    textStyle: {
        color: "#575757",
    }
})
