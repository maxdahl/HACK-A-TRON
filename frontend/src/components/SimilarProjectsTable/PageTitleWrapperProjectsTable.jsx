import PropTypes from "prop-types";
import { Box, styled } from "@mui/material";

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
`
);

function PageTitleWrapperProjectsTable({ children }) {
  return <PageTitle className="MuiPageTitle-wrapper">{children}</PageTitle>;
}

PageTitleWrapperProjectsTable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitleWrapperProjectsTable;
