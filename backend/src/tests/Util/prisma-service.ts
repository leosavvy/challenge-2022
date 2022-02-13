export function PrismaServiceMock() {
    return {
        employee: {
            findMany: jest.fn(),
            groupBy: jest.fn(),
            create: jest.fn(),
        },
    };
}
