import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="name" />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="1111-111-11111" />
                </CardSection>

                <CardSection>
                    
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;