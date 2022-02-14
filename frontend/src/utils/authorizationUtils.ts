import { APIClient } from "@src/APIClient/APIClient";

type LoginType = {
    access_token: string;
};

export const UserLogin = (
    userName: string,
    password: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onRequestError: (error: any) => void,
): Promise<LoginType> => {
    return APIClient.getInstance(onRequestError)
        .Request<LoginType>({
            method: "POST",
            apiEntity: "AuthorizationAPI",
            endpoint: "login",
            body: {
                username: userName,
                password,
            },
        })
        .then((response) => {
            if (response) {
                return response;
            }
        });
};
