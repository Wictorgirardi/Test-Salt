import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "15px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "center",
    },
  },
}));

const ModalEdit = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {props.edit ? (
        <Typography variant="h2" component="h2" gutterBottom>
          Editar {props.name}
        </Typography>
      ) : (
        <Typography variant="h2" component="h2" gutterBottom>
          Criar novo Plano de Ação
        </Typography>
      )}

      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="Nome da Ação"
          label="Nome da Ação"
          placeholder="Nome da Ação"
          defaultValue={props.name}
        />
        <TextField
          id="What?"
          label="What?"
          placeholder="What?"
          defaultValue={props.what}
        />
        <TextField
          id="Why?"
          label="Why?"
          placeholder="Why?"
          defaultValue={props.why}
        />
        <TextField
          id="Where?"
          label="Where?"
          placeholder="Where?"
          defaultValue={props.where}
        />
        <TextField
          id="When?"
          label="When?"
          placeholder="When?"
          defaultValue={props.when}
        />
        <TextField
          id="Who?"
          label="Who?"
          placeholder="Who?"
          defaultValue={props.who}
        />
        <TextField
          id="How?"
          label="How?"
          placeholder="How?"
          defaultValue={props.how}
        />
        <TextField
          id="How Much?"
          label="How Much?"
          placeholder="How Much?"
          defaultValue={props.howMuch}
        />
      </form>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <div className={classes.root}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#A7E12E", color: "white" }}
            onClick={handleClose}
          >
            Salvar
          </Button>
        </div>
      </Grid>
    </div>
  );

  return (
    <>
      {props.edit ? (
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF9800", color: "white" }}
          onClick={handleOpen}
        >
          <EditIcon />
        </Button>
      ) : (
        <Fab color="primary" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default ModalEdit;
