import React, {Component} from'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import {LoginForm} from './components/LoginForm';

class App extends Component {
    
    state = {
        loggedIn : null
    };
    
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyAYJp0c0AUr-633itWLhNjgbPUc_gSFkWw",
            authDomain: "auth-4317b.firebaseapp.com",
            databaseURL: "https://auth-4317b.firebaseio.com",
            projectId: "auth-4317b",
            storageBucket: "auth-4317b.appspot.com",
            messagingSenderId: "17286070308"
        });
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn : true});
            } else {
                this.setState({loggedIn : false});
            }
        });
    }
    
    renderContent(){
        switch (this.state.loggedIn){
            case true :
                return (
                    <Button onPress={() => firebase.auth().signOut()}> 
                        Log Out 
                    </Button>
                );
                
            case false :
                return <LoginForm />
                
            default : 
                return <Spinner size="large" />
        }
    }
    
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
};

export default App;