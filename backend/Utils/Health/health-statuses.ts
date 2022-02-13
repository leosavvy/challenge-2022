export type HealthStatusResponse = {
    status: HealthStatuses;
};

export enum HealthStatuses {
    Healthy = "Healthy",
    Unhealthy = "Unhealthy",
    Maintenance = "In Maintenance",
}
