import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import useFirestore from "../../Hooks/useFirestore";

const columns = [
    { id: 'id', label: 'Truck Id ', minWidth: 100 },
    {
        id: 'Capacity',
        label: 'Capacity',
        minWidth: 100,


    },





    {
        id: 'login',
        label: 'Availability',
        minWidth: 100,

    },
    { id: 'DriverId', label: 'Driver Id', minWidth: 100 },
];

function createData(Driverid, Email, Address, FullName,NicNumber,PhoneNumber) {

    return { name: Driverid, code: Email, population: Address, size: FullName,NicNumber,PhoneNumber };
}



const useStyles = makeStyles({
    root: {
        width: '75%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function TrucksDetails() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const {docs} = useFirestore('Trucks');

    return (

        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {docs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((doc) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={doc.code}>
                                    {columns.map((column) => {
                                        const value = doc[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );


}
