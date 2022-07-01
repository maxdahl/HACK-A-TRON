import { Work } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import MuiAlert from "@mui/material/Alert";

import Snackbar from "@mui/material/Snackbar";

const floating = {
  margin: 0,
  top: "50%",
  right: 20,
  bottom: 60,
  left: "auto",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function ApplyToProjectModal({ project }) {
  /* SNACK */
  const [openSnack, setOpenSnack] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClickSnack = () => {
    setOpenSnack(true);
  };
  const handleClose = () => {
    setOpen(false);
    handleClickSnack();
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardContent>
            <CardMedia
              component="img"
              alt=""
              height="140"
              image="./src/assets/APSIDELOGO.png"
            />
            <Typography gutterBottom variant="h5" component="div">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h2 style={{ textAlign: "center" }}>{project.name}</h2>
                </Grid>
                <Grid item xs={12}>
                  <h6>
                    Open Position:{" "}
                    {project.openPositions.map((position) => {
                      return `${position} `;
                    })}
                  </h6>
                  <h6> Location: {project.location}</h6>
                </Grid>
                <Grid item xs={12}>
                  <p> {project.description}</p>
                </Grid>
              </Grid>
            </Typography>
            <Typography variant="body2" color="text.secondary" />
            <br />
            <TextField
              id="filled-textarea"
              placeholder="Tell us why you want to join!"
              multiline
              minRows={5}
              maxRows={5}
              variant="filled"
              style={{ width: "100%" }}
            />
          </CardContent>
          <CardActions>
            <Button
              style={{ marginLeft: "460px" }}
              variant="contained"
              onClick={handleClose}
            >
              Apply
            </Button>
          </CardActions>
        </Card>
      </Modal>
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        message="Note archived"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        /* action={action} */
      >
        <Alert
          onClose={handleCloseSnack}
          severity="success"
          sx={{ width: "100%" }}
        >
          You applied to {project.name} in {project.location}
        </Alert>
      </Snackbar>

      <Fab
        style={floating}
        color="secondary"
        sx={{ backgroundColor: "#e77620" }}
        aria-label="add"
        onClick={handleOpen}
      >
        <Work />
      </Fab>
    </>
  );
}
