import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { Card, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdateAction } from "../actions";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdateAction({ prop: "name", value })}
            placeholder="name"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdateAction({ prop: "phone", value })}
            placeholder="1111-111-11111"
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdateAction({ prop: "shift", value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = ({ employee }) => {
  const { name, phone, shift } = employee;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdateAction
})(EmployeeCreate);
