import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import * as React from "react";
import { Work } from "@mui/icons-material";

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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <Typography gutterBottom variant="h5" component="div">
              Project Title
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
            <Button style={{ marginLeft: "290px" }} variant="contained">
              Apply
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </div>
  );
}
