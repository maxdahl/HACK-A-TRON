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

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
/* import { Link } from "react-router-dom"; */
import "./Navbar.css";

const StyledFab = styled(Fab)({
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
      sx={{ top: "auto", bottom: 0, backgroundColor: "#183650" }}
    >
      <Toolbar className="tb22">
        <Grid container display="flex" direction="row" alignItems="center">
          <Grid item className="grid-item-a" xs={6} textAlign="center">
            <a
              href="/users"
              style={{ width: "100%", backgroundColor: "primary" }}
            >
              Users
            </a>
          </Grid>
          <Grid item xs={6} className="grid-item-b" textAlign="center">
            <a href="/" style={{ width: "100%" }}>
              Projects
            </a>
          </Grid>
        </Grid>

        <StyledFab color="#787878" aria-label="add">
          +
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
