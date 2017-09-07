import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdateAction, employeeCreateAction } from "../actions";
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreateAction({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm {...this.props} />        

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employee }) => {
  const { name, phone, shift } = employee;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdateAction,
  employeeCreateAction
})(EmployeeCreate);
