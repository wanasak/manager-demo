import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChangeAction, passwordChangeAction, loginUserAction } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text } from 'react-native';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChangeAction(text);
    }

    onPasswordChange(text) {
        this.props.passwordChangeAction(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        
        this.props.loginUserAction({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        autoFocus
                        label="Email"
                        placeholder="email@email.com"
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
    emailChangeAction, 
    passwordChangeAction,
    loginUserAction
 })(LoginForm);