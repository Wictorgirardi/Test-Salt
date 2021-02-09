import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ModalDelete from 'components/ModalDelete';
import ModalEdit from 'components/ModalEdit';

const StyledTableCell = withStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, what, why, where, when, who, how, howMuch) {
  return { name, what, why, where, when, who, how, howMuch };
}

const rows = [
  createData(
    "Plano 1",
    "motivo what 1",
    "Motivo why 1",
    "Motivo where 1",
    "Motivo when 1",
    "motivo who 1",
    "motivo how 1",
    "motivo how much 1"
  ),
  createData(
    "Plano 2",
    "motivo what 2",
    "Motivo why 2",
    "Motivo where 2",
    "Motivo when 2",
    "motivo who 2",
    "motivo how 2",
    "motivo how much 2"
  ),
  createData(
    "Plano 3",
    "motivo what 3",
    "Motivo why 3",
    "Motivo where 3",
    "Motivo when 3",
    "motivo who 3",
    "motivo how 3",
    "motivo how much 3"
  ),
  createData(
    "Plano 4",
    "motivo what 4",
    "Motivo why 4",
    "Motivo where 4",
    "Motivo when 4",
    "motivo who 4",
    "motivo how 4",
    "motivo how much 4"
  ),
  createData(
    "Plano 5",
    "motivo what 5",
    "Motivo why 5",
    "Motivo where 5",
    "Motivo when 5",
    "motivo who 5",
    "motivo how 5",
    "motivo how much 5"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TableData = (props) => {
  const { className, onChange, style, ...rest } = props;
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Planos de Ação</StyledTableCell>
              <StyledTableCell align="center">What?</StyledTableCell>
              <StyledTableCell align="center">Why?</StyledTableCell>
              <StyledTableCell align="center">When?</StyledTableCell>
              <StyledTableCell align="center">Where?</StyledTableCell>
              <StyledTableCell align="center">Who?</StyledTableCell>
              <StyledTableCell align="center">How?</StyledTableCell>
              <StyledTableCell align="center">How Much?</StyledTableCell>
              <StyledTableCell align="center">Editar</StyledTableCell>
              <StyledTableCell align="center">Deletar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.what}</StyledTableCell>
                <StyledTableCell align="center">{row.why}</StyledTableCell>
                <StyledTableCell align="center">{row.where}</StyledTableCell>
                <StyledTableCell align="center">{row.when}</StyledTableCell>
                <StyledTableCell align="center">{row.who}</StyledTableCell>
                <StyledTableCell align="center">{row.how}</StyledTableCell>
                <StyledTableCell align="center">{row.howMuch}</StyledTableCell>
                <StyledTableCell align="center">
                <ModalEdit edit={true} name={row.name}> </ModalEdit>
                </StyledTableCell>
                <StyledTableCell align="center">
               <ModalDelete name={row.name}></ModalDelete>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableData;
