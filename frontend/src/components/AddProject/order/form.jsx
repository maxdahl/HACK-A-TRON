import { HelmetProvider, Helmet } from "react-helmet-async";
import PageTitleWrapper from "./PageTitleWrapper";
import PageHeader from "./PageHeader";

function AddOrder() {
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

export default AddOrder;
