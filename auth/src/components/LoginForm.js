import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Spinner} from './common';

class LoginForm extends Component {
    state = { 
        email : '',
        password : '', 
        error : '', 
        loading : false
    }
    
    onButtonPress(){
        const {email, password} = this.state;
        
        this.setState({error : '', loading : true});
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }
    
    renderButton(){
        if(this.state.loading){
            return <Spinner size="small"/>
        }
        
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in 
            </Button>
        );
        
    }
    
    onLoginSuccess(){
        this.setState({
            email : '', 
            password : '', 
            error : '', 
            loading : false
        });
    }
    
    onLoginFail(){
        this.setState({
            error : "Authentication failed",
            loading : false
        });
    }
    
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder = "user@example.com"
                        label = "Email"
                        value = {this.state.email}
                        onChangeText = {email => this.setState({email})}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        placeholder = "password"
                        label = "Password"
                        value = {this.state.password}
                        onChangeText = {password => this.setState({password})}
                        secureTextEntry // by just listing the prop, it will show up as true
                    />
                </CardSection>
                
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle : {
        fontSize : 20,
        alignSelf : 'center',
        color : 'red'
    }
};

export default LoginForm;