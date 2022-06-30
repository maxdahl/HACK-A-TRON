import { Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";

function PageHeader() {
  /*   const navigate = useNavigate(); */
  /*   const navigateToClientOverview = () => {
    navigate("/clients/overview");
  }; */

  return (
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
          variant="h4"
          component="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#E77620" }}
        >
          CREATE A NEW PROJECT
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
          variant="h4"
          component="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#E77620", opacity: "0.7" }}
        >
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>
        <Typography
          variant="h4"
          component="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#E77620", opacity: "0.7" }}
        >
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
        <Button
          sx={{
            mt: { xs: 2, md: 0, color: "#0A1E30" },
          }}
          /*           onClick={navigateToClientOverview} */
          variant="outlined"
          startIcon={<ArrowBackIcon fontSize="small" />}
        >
          Back to Project Overview
        </Button>
      </Grid>
    </Grid>
  );
}
// eslint-disable-next-line
PageHeader.propTypes = {
  handleCreateEvent: PropTypes.func,
};

PageHeader.defaultProps = {
  handleCreateEvent: () => {},
};

export default PageHeader;
