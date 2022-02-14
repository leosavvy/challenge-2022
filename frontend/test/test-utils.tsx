import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import theme from "../src/config/theme";
import { ThemeProvider } from "@material-ui/core";

const AllTheProviders: FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
): unknown => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
