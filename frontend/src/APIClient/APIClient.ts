import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosResponse,
    Method,
    ResponseType,
} from "axios";
import url from "url";

type RequestOptions = {
    endpoint: string;
    method: Method;
    queryParams?: any;
    headers?: any;
    body?: any;
    responseType?: ResponseType;
};

export class APIClient {
    static currentInstance: APIClient;
    errorHandlerFunction: (error: any) => void;

    public static getInstance(
        errorHandlerFunction?: (error: any) => void,
    ): APIClient {
        if (!this.currentInstance) {
            this.currentInstance = new APIClient();
        }
        this.currentInstance.errorHandlerFunction = errorHandlerFunction;
        return this.currentInstance;
    }

    public Request<Type>(options: RequestOptions): Promise<Type> {
        const requestConfig: AxiosRequestConfig = {
            url: options.endpoint,
            method: options.method,
            params: options.queryParams
                ? new url.URLSearchParams(options.queryParams).toString()
                : "",
            responseType: options.responseType ?? "json",
            data: options.body,
            headers: {
                ...options.headers,
            },
        };

        return new Promise<Type>((resolve) => {
            axios(requestConfig)
                .then((data: AxiosResponse<Type>) => {
                    const response = data.data as Type;
                    resolve(response);
                })
                .catch((e: AxiosError) => {
                    console.log(e.response);

                    if (this.errorHandlerFunction) {
                        this.errorHandlerFunction({ ...e });
                    }

                    resolve(null);
                });
        });
    }
}
