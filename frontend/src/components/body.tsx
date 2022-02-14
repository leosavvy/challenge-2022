import React, { FC, useEffect, useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { ITheme } from "@src/config/theme";
import BackgroundBody from "@public/images/backgroundBody.jpg";

import { APIClient } from "@src/APIClient/APIClient";
import { Home } from "./home";

const useStyles = makeStyles((theme: ITheme) => ({
    element: {},
}));

export const Body: FC = () => {
    const classes = useStyles();

    const [response, setResponse] = useState({});

    useEffect(() => {
        APIClient.getInstance()
            .Request<any>({
                endpoint: `http://localhost:8000/employee/`,
                method: "GET",
            })
            .then((response) => {
                setResponse(response);
            });
    }, []);
    useEffect(() => {
        console.log(response);
    }, [response]);

    return (
        <>
            <Home></Home>
        </>
    );
};
