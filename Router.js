import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList';
import EmployeeCreate from './src/components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            {/* BUCKET */}
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            {/* BUCKET */}
            <Scene key="main">
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                    key="employeeList" 
                    component={EmployeeList} 
                    title="Employees" />
                <Scene
                    key="employeeCreate"
                    title="Create Employee"
                    component={EmployeeCreate} />
            </Scene>
        </Router>
    );
}

export default RouterComponent;