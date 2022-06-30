import { Work } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

const floating = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed",
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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Fab
        style={floating}
        color="primary"
        aria-label="add"
        onClick={handleOpen}
      >
        <Work />
      </Fab>
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
                <Grid item xs={6}>
                  <Item>
                    <h4>Project Title</h4>
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h6>Open Position: {}</h6>
                    <h6> Project Lead: {}</h6>
                  </Item>
                </Grid>
              </Grid>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              lorem ipsum isnt working vjasjsdnsadjvasnsd af fa sfd af ad aa fda
              fda fdlcsadfdsffgdv csdvsv bfdbgsfbdgnfsdfb cdscas geb t dcsa csa
              cskca cjklrvcads
            </Typography>
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
            <Button style={{ marginLeft: "460px" }} variant="contained">
              Apply
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}
