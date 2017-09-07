import * as _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { CardSection, Card, Button } from "./common";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdateAction, employeeSaveAction } from "../actions";

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdateAction({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSaveAction({ name, phone, shift, uid: this.props.employee.uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
          <Button>Delete</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employee;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdateAction,
  employeeSaveAction
})(EmployeeEdit);
