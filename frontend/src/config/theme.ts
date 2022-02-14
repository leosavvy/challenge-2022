import { createTheme, Theme, ThemeOptions } from "@material-ui/core";
import { Palette } from "@material-ui/core/styles/createPalette";

type SaveItPalette = {
    background: string;
    text: string;
    primary: string;
    secondary: string;
};

interface IPalette extends Palette {
    saveItPalette: SaveItPalette;
}

export interface ITheme extends Theme {
    palette: IPalette;
}

interface IThemeOptions extends ThemeOptions {
    palette: IPalette;
}

const saveItPalette: SaveItPalette = {
    background: "#F7F5FF",
    text: "#FFF",
    primary: "#09152c",
    secondary: "#ea1414",
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#09152c",
            contrastText: "#FFF",
        },
        secondary: {
            main: "#ea1414",
            contrastText: "#FFF",
        },
        background: {
            default: "#FFF",
        },
        saveItPalette,
    },
    typography: {
        fontFamily: ["Hind"],
        allVariants: {
            color: saveItPalette.text,
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "html, body, #__next": {
                    height: "100%",
                },
            },
        },
    },
} as unknown as IThemeOptions);

export default theme;
