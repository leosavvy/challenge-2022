export function EmployeeServiceMock() {
    return {
        getAllEmployees: jest.fn(),
        createEmployee: jest.fn(),
    };
}
