export function EmployeeRepositoryMock() {
    return {
        getAll: jest.fn(),
        create: jest.fn(),
    };
}
