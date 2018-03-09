import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
    return (
        <View style = {styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/> // if size is not passed as a prop, then default size will be large
        </View>
    );
};

const styles = {
    spinnerStyle : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
}

export {Spinner};