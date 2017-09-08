import * as _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { CardSection, Card, Button, Confirm } from "./common";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdateAction, employeeSaveAction,employeeDeleteAction } from "../actions";

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdateAction({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSaveAction({ name, phone, shift, uid: this.props.employee.uid });
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDeleteAction({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm 
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          >
          Are you sure you want to fire this employee?
        </Confirm>
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
  employeeSaveAction,
  employeeDeleteAction
})(EmployeeEdit);
