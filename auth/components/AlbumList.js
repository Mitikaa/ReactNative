import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    //class level property to set default state
    state = { albums: [] }; // when this component gets created, this will be the initial state
    
    // lifecycle method -- executed as soon as you enter the screen
    componentWillMount() {
        // get type request -- returns back a promise
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            // setState is implemented by component class
            .then(response => this.setState({ albums: response.data }));
    }
    
    renderAlbums(){
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    };
    
    render() {
        console.log(this.state);
        
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;