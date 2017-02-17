import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry = false }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                style={inputStyle}
                value={value}
                underlineColorAndroid='transparent'
                placeholder={placeholder}
                placeholderTextColor='#ccc'
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 5
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };