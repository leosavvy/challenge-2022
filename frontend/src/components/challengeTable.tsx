import React, { FC, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { APIClient } from "@src/APIClient/APIClient";

type ChallengeTableProps = {
    rows: Array<any>;
};

export const ChallengeTable: FC<ChallengeTableProps> = ({ rows }) => {
    const [reloader, setReloader] = useState({ time: Date.now() });

    const reload = () => {
        setReloader({ time: Date.now() });
    };

    useEffect(() => {
        setInterval(() => reload(), 10000);
    }, []);

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {Object.keys(rows[0]).map((key) => (
                                <TableCell>{key}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                {Object.values(row).map((value) =>
                                    typeof value === "object" ? (
                                        <TableCell>{value["salary"]}</TableCell>
                                    ) : (
                                        <TableCell>{value}</TableCell>
                                    ),
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
