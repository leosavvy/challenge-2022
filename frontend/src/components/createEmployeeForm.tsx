import React, { FC, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { APIClient } from "@src/APIClient/APIClient";
import { Button, Stack, TextField } from "@mui/material";

export const CreateEmployeeForm: FC = () => {
    const [department, setDepartment] = React.useState("");
    const [salary, setSalary] = React.useState("");

    useEffect(() => {
        // APIClient.getInstance()
        //     .Request<any>({
        //         endpoint: `http://localhost:8000/employee/`,
        //         method: "GET",
        //     })
        //     .then((response) => {
        //         setResponse(response);
        //     });
    }, []);

    const handleDepartmentChange = (event: SelectChangeEvent) => {
        setDepartment(event.target.value as string);
    };
    const handleSalaryChange = (event: SelectChangeEvent) => {
        setSalary(event.target.value as string);
    };
    const handleCreate = (event: SelectChangeEvent) => {
        setSalary(0);
        setDepartment("");
        APIClient.getInstance().Request<any>({
            endpoint: `http://localhost:8000/employee/`,
            method: "POST",
            body: {
                department,
                salary: parseInt(salary),
            },
        });
        alert("Request Sent");
    };

    return (
        <>
            <FormControl fullWidth>
                <Stack spacing={10} direction="row">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={department}
                        label="Department"
                        onChange={handleDepartmentChange}
                        sx={() => {
                            return {
                                minWidth: 200,
                            };
                        }}
                        value={department}
                    >
                        <MenuItem value={"CX"}>CX</MenuItem>
                        <MenuItem value={"IT"}>IT</MenuItem>
                        <MenuItem value={"Support"}>Support</MenuItem>
                    </Select>
                    <TextField
                        id="standard-basic"
                        label="Salary"
                        variant="standard"
                        onChange={handleSalaryChange}
                        value={salary}
                    />
                    <Button variant="text" onClick={handleCreate}>
                        Create
                    </Button>
                </Stack>
            </FormControl>
        </>
    );
};

export default CreateEmployeeForm;
