import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useForm, Controller } from "react-hook-form";

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
  const { handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => console.log(data);
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

      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={TextField}
          error={errors.NomePlanodeação}
          rules={{ required: true }}
          name="NomePlanodeação"
          label="Nome Plano de ação"
          defaultValue={props.name !== undefined ? props.name : ""}
          control={control}
        />
        <Controller
          as={TextField}
          rules={{ required: true }}
          error={errors.What}
          name="What"
          label="What?"
          defaultValue={props.what !== undefined ? props.what : ""}
          control={control}
        />
        <Controller
          as={TextField}
          rules={{ required: true }}
          error={errors.Why}
          name="Why"
          label="Why?"
          defaultValue={props.why !== undefined ? props.why : ""}
          control={control}
        />
        <Controller
          as={TextField}
          rules={{ required: true }}
          error={errors.Where}
          name="Where"
          label="Where?"
          defaultValue={props.where !== undefined ? props.where : ""}
          control={control}
        />
        <Controller
          as={TextField}
          rules={{ required: true }}
          error={errors.When}
          name="When"
          label="When?"
          defaultValue={props.when !== undefined ? props.when : ""}
          control={control}
        />
        <Controller
          as={TextField}
          rules={{ required: true }}
          error={errors.Who}
          name="Who"
          label="Who?"
          defaultValue={props.who !== undefined ? props.who : ""}
          control={control}
        />
        <Controller
          as={TextField}
          rules={{ required: true }}
          error={errors.How}
          name="How"
          label="How?"
          defaultValue={props.how !== undefined ? props.how : ""}
          control={control}
        />
        <Controller
          as={TextField}
          name="HowMuch"
          error={errors.HowMuch}
          rules={{ required: true }}
          label="How Much?"
          defaultValue={props.howMuch !== undefined ? props.howMuch : ""}
          control={control}
        />

        <Grid container direction="row" justify="flex-end" alignItems="center">
          <div className={classes.root}>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#A7E12E", color: "white" }}
            >
              Salvar
            </Button>
          </div>
        </Grid>
      </form>
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
