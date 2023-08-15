import React from 'react'
import { TouchableOpacity, Image, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Logo from './Logo';
import Images from '@assets/images';

const SimpleNavBar = () => {
    return (
        <Header
            backgroundColor="#F08013"
            barStyle="default"
            leftContainerStyle={{ justifyContent: 'center' }}
            rightContainerStyle={{ justifyContent: 'center' }}
            centerComponent={<Image source={Images.logo_header} style={{
                width: '100%',
                height: 70,
            }} />}
        />

    )
}

export default SimpleNavBar
