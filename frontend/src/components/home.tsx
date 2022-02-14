import React, { FC, useEffect, useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import { ITheme } from "@src/config/theme";
import BackgroundBody from "@public/images/backgroundBody.jpg";
import { APIClient } from "@src/APIClient/APIClient";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ChallengeTable } from "./challengeTable";
import { CreateEmployeeForm } from "./createEmployeeForm";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme: ITheme) => ({
    element: {},
}));

type StatisticType = {
    department: string;
    maxSalary: { salary: number };
    minSalary: { salary: number };
    avgSalary: { salary: number };
};
type EmployeeType = {
    employeeId: string;
    department: string;
    salary: string;
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export const Home: FC = () => {
    const [value, setValue] = React.useState(0);
    const [statistics, setStatistics] = useState<Array<StatisticType>>([]);
    const [employees, setEmployees] = useState<Array<EmployeeType>>([]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const getStatistics = () => {
        APIClient.getInstance()
            .Request<any>({
                endpoint: `http://localhost:8000/statistic/`,
                method: "GET",
            })
            .then((response) => {
                setStatistics([...response]);
            });
    };
    const getEmployees = () => {
        APIClient.getInstance()
            .Request<any>({
                endpoint: `http://localhost:8000/employee/`,
                method: "GET",
            })
            .then((response) => {
                setEmployees([...response]);
            });
    };

    const handleRefresh = () => {
        getEmployees();
        getStatistics();
    };

    useEffect(() => {
        getStatistics();
        getEmployees();
    }, []);

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Salaries Statistic" {...a11yProps(0)} />
                    <Tab label="Employees" {...a11yProps(1)} />
                    <Tab label="Create Employee" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <>
                    {statistics.length > 0 && (
                        <ChallengeTable rows={statistics}></ChallengeTable>
                    )}
                    <Button variant="text" onClick={handleRefresh}>
                        Refresh Now
                    </Button>
                </>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <>
                    {employees.length > 0 && (
                        <ChallengeTable rows={employees}></ChallengeTable>
                    )}
                    <Button variant="text" onClick={handleRefresh}>
                        Refresh Now
                    </Button>
                </>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CreateEmployeeForm></CreateEmployeeForm>
            </TabPanel>
        </Box>
    );
};
