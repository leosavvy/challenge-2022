import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Router from "next/router";
import { Settings } from "luxon";

import theme from "src/config/theme";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
