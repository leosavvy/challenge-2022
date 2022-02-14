import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { ITheme } from "@src/config/theme";
import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Body } from "@components/body";
import { Home } from "@components/home";

const useStyles = makeStyles((theme: ITheme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        overflowX: "hidden",
    },
}));

const MainDashboard: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Home></Home>
        </div>
    );
};

export default MainDashboard;
