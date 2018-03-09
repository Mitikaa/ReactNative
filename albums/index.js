// Import a library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    // this is JSX -- extension of JS that is used to write react components
    <View style={{flex : 1}}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render the component to a device
AppRegistry.registerComponent('albums', () => App);
