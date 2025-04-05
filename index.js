// Write your solution in this file!
//employee object
const employee = {
    name: 'Spongebob',
    streetAddress: 'Pineapple under the sea'
};

// updateEmployeeWithKeyAndValue function
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value};
}

// destructivelyUpdateEmployeeWithKeyAndValue function
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

// deleteFromEmployeeByKey function
function deleteFromEmployeeByKey(employee, key){
     const { [key]: deletedKey, ...newEmployee } = employee;
     return newEmployee;
}

// destructivelyDeleteFromEmployeeByKey function
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}