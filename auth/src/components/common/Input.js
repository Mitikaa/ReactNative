import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({label, value, onChangeText, secureTextEntry}) => {
    const {inputStyle, labelStyle, containerStyle, placeholder} = styles;
    
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                placeholder = {placeholder}
                autoCorrect = {false}
                value = {value}
                onChangeText = {onChangeText}
                secureTextEntry = {secureTextEntry}
                style = {inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle : {
        color : '#000',
        paddingRight : 5,
        paddingLeft : 5,
        fontSize : 18,
        lineHeight : 23,
        flex : 2 // for each sibling, we add the values of flex(2+1 = 3), so 2/3 of space is allocated to inputStyle, and 1/3 to labelStyle
    },
    labelStyle : {
        fontSize : 18,
        paddingLeft : 20,
        flex : 1
    },
    containerStyle : {
        height : 40,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center'
    }
};

export {Input};