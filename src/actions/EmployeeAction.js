import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdateAction = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};
