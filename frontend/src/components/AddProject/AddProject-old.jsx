import { HelmetProvider, Helmet } from "react-helmet-async";
import PageTitleWrapper from "../PageLayout/PageTitleWrapper";
import PageHeader from "../PageLayout/PageHeader";

function AddProject() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Add new Poject</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
    </HelmetProvider>
  );
}

export default AddProject;
