import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "right",
    },
  },
}));

const ModalDelete = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const name = props;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h2" component="h2" gutterBottom>
        Deletar {props.name}
      </Typography>
      <Typography variant="subtitle1" component="h4" gutterBottom>
        Deseja mesmo deletar esse plano de ação?
      </Typography>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <div className={classes.root}>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Sair
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#DD014E", color: "white" }}
            onClick={handleOpen}
          >
            Deletar
          </Button>
        </div>
      </Grid>
    </div>
  );

  return (
    <>
      <Button
        variant="contained"
        style={{ backgroundColor: "#DD014E", color: "white" }}
        onClick={handleOpen}
      >
        <DeleteForeverIcon />
      </Button>
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

export default ModalDelete;
