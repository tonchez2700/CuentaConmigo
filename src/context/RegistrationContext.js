import { Alert } from 'react-native'
import createDataContext from './createDataContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpClient from '../services/httpClient'
import httpClientId from '../services/httpClientId';
import { Base64 } from 'js-base64';
import * as rootNavigation from '../helpers/rootNavigation';

const initialState = {
    error: false,
    message: null,
    isVisible: false,
    fetchingData: false,
    dataFrom: null,
}

const RegistrationReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CLEAR_STATE":
            return {
                ...initialState,
            };
        case "FETCHING_DATA":
            return { ...state, fetchingData: action.payload.fetchingData };
        case "SET_REQUEST_ERROR":
            return {
                ...state,
                error: true,
                message: action.payload.message,
                fetchingData: false,
            };
        case "SET_REQUEST_PAYMENTS":
            return {
                ...state,
                payments: action.payload.response,
                fetchingData: false,
            };
        case 'CHANGE_VISIBLE_MODAL':
            let visibleCheck = !state.isVisible
            return {
                ...state,
                error: false,
                message: '',
                fetchingData: false,
                isVisible: visibleCheck
            }
        case 'SET_MASK':
            let type = action.payload.typedata
            return {
                ...state,
                dataFrom: {
                    ...state.dataFrom,
                    [type]: action.payload.value,
                }

            }
        case 'SET_SCAN':

            return {
                ...state,
                error: false,
                message: '',
                fetchingData: false,
                galeria: action.payload.galeria,
                dataFrom: {
                    name: `${action.payload.response.result.fullName} `,
                    apellidos: `${action.payload.response.result.fathersName} ${action.payload.response.result.mothersName}`,
                    gender_id: action.payload.response.result.sex,
                    birthdate: action.payload.response.result.dateOfBirth.originalString,
                    document_id: action.payload.response.result.classInfo.type,
                    document_number: action.payload.response.result.documentAdditionalNumber,
                    age: action.payload.response.result.age,
                    address: action.payload.response.result.address,
                    image: action.payload.response.result.fullDocumentImageBase64
                }
            }
        default:
            return state;
    }

};

const clearState = (dispatch) => {
    return () => {
        dispatch({ type: "CLEAR_STATE" });
    };
};

const isVisibleModal = (dispatch) => {
    return async (message) => {
        dispatch({
            type: "CHANGE_VISIBLE_MODAL",
            payload: { message },
        });
    };
};



const ScanIdCard = (dispatch) => {
    return async (Image, galeria) => {
        try {
            dispatch({ type: 'FETCHING_DATA', payload: { fetchingData: true } });
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            const data = {
                returnFullDocumentImage: true,
                returnFaceImage: false,
                returnSignatureImage: false,
                allowBlurFilter: true,
                allowUnparsedMrzResults: false,
                allowUnverifiedMrzResults: true,
                validateResultCharacters: true,
                anonymizationMode: "FULL_RESULT",
                anonymizeImage: true,
                ageLimit: 0,
                imageSource: Image,
                scanCroppedDocumentImage: false,
            }
            const apiKey = '6a29f1c02df5452fabbb1fc7fa0ba16c';
            const apiSecret = '293d80d9-777d-40bc-9354-692affb2aaed';
            const authHeader = Base64.encode(apiKey + ':' + apiSecret);
            const response = await httpClientId
                .post(`recognizers/blinkid`, data,
                    {
                        'Authorization': `Bearer ${authHeader}`,
                    }
                )
            console.log(response);
            // dispatch({
            //     type: 'SET_SCAN',
            //     payload: { response, galeria }
            // })
            // rootNavigation.navigate('RegisterScreen')
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_REQUEST_ERROR',
                payload: {
                    error: true,
                    message: 'Por el momento el servicio no está disponible, inténtelo mas tarde.'
                }
            });
        }
    }

}

const handleInputChange = (dispatch) => {
    return async (value, typedata) => {

        dispatch({
            type: 'SET_MASK',
            payload: { value, typedata, }
        })
    }
}


export const { Context, Provider } = createDataContext(
    RegistrationReducer,
    {
        clearState,
        isVisibleModal,
        handleInputChange,
        ScanIdCard,

    },
    initialState
);