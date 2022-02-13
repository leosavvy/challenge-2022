export function PrismaServiceMock() {
    return {
        employee: {
            findMany: jest.fn(),
        },
    };
}
