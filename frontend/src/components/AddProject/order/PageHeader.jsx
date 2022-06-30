import { Typography, Grid } from "@mui/material";
/* import PropTypes from "prop-types"; */
import Box from "@mui/material/Box";

function PageHeader({ location }) {
  /*   const navigate = useNavigate(); */
  /*   const navigateToClientOverview = () => {
    navigate("/clients/overview");
  }; */

  return (
    <Box mx={10}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Box
            component="img"
            sx={{
              height: 54.5,
              width: 191.25,
            }}
            alt="Logo"
            src="https://i.imgur.com/CGLZ1uK.png"
          />

          <Typography
            variant="h5"
            component="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#E77620", mt: "15px" }}
          >
            {location}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ color: "#0A1E30" }}
          >
            APSIDE GROUP
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            component="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#0A1E30" }}
            align="right"
          >
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#0A1E30" }}
          >
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
// eslint-disable-next-line
/* PageHeader.propTypes = {
  handleCreateEvent: PropTypes.func,
}; */

PageHeader.defaultProps = {
  handleCreateEvent: () => {},
};

export default PageHeader;
