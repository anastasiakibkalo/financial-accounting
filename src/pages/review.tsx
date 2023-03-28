import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import ReviewInfo from "components/ReviewInfo/ReviewInfo";
import Category from "components/Category/Category";

const Review: NextPage = () => {
  return (
    <Layout title="Review">
      <ReviewInfo />
      <Category type="income" />
      <Category type="balance" />
      <Category type="expenses" />
    </Layout>
  );
};

export default Review;
