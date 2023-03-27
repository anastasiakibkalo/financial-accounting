import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import ReviewInfo from "components/ReviewInfo/ReviewInfo";

const Review: NextPage = () => {
  return (
    <Layout title="Review">
      <ReviewInfo />
    </Layout>
  );
};

export default Review;
