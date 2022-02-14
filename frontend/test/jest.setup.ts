import "isomorphic-unfetch";
import dotenv from "dotenv";
import httpAdapter from "axios/lib/adapters/http";
import axios from "axios";
import * as Router from "next/router";
import { Settings } from "luxon";

import "@testing-library/jest-dom";

dotenv.config({ path: ".env.test" });

axios.defaults.adapter = httpAdapter;

if (window) {
    window.matchMedia = jest.fn().mockImplementation((query) => {
        return {
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    });

    window.scroll = jest.fn();
    window.alert = jest.fn();
}

//Mock for <Link /> component that gives next
jest.mock(
    "next/link",
    () =>
        ({ children }) =>
            children,
);

jest.spyOn(Router, "useRouter").mockImplementation(() => ({
    ...jest.requireActual("next/router"),
    push: jest.fn(),
}));

jest.spyOn(Router.default, "replace").mockImplementation(jest.fn());

jest.setTimeout(10000);

Settings.defaultLocale = "es-CL";
