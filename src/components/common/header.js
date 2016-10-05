
import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        elevation: 2,
        height: 60,
        justifyContent: 'center',
        paddingTop: 15,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
};

const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

export { Header };
