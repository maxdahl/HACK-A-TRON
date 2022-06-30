// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <ul className="nav-ul">
//         <li>
//           <Link to="/">Link1</Link>
//         </li>
//         <li>
//           <Link to="/">Link2</Link>
//         </li>
//         <li>
//           <Link to="/">Link3</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

const boxSX = {
  "&:hover": {
    border: "1px solid #E77620",
    color: "black",
    backgroundColor: "#E89759",
  },
};

const StyledFab = styled(Fab)({
  backgroundColor: "#E77620",
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      /*  color="secondary" */
      sx={{ top: "auto", bottom: 0 /* , backgroundColor: "#183650" */ }}
    >
      <Toolbar
        /* className="tb22" */ style={{ padding: 0, minHeight: 0 }}
        id="test"
      >
        <Grid
          container
          display="flex"
          direction="row"
          alignItems="center"
          style={{ padding: 0 }}
        >
          <Grid item className="grid-item-a" xs={6} textAlign="center">
            <Link to="/navbar">
              <Button
                id="nav-button"
                color="secondary"
                sx={{ width: "100%", color: "#F0F0F0" }}
              >
                Users
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6} className="grid-item-b" textAlign="center">
            <Link to="/navbar">
              <Button id="nav-button" sx={{ width: "100%", color: "#F0F0F0" }}>
                Projects
              </Button>
            </Link>
          </Grid>
        </Grid>

        <StyledFab id="plus" aria-label="add" sx={boxSX}>
          +
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
