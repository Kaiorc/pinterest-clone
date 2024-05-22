import { createTheme } from "@mui/material";
import {  red } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
        main: '#cb2027',
        dark: red[900],
        light: red[500],
        contrastText: "#ffffff",
        },
        secondary: {
            main: "#f7f6f3",
            dark: red[800],
            light: red[500],
            contrastText: "#000000",
        },
        background: {
            paper: "#f7f6f3",
            default: "#ffffff",
        },
    },
});