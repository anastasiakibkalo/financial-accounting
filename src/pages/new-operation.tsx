import type { NextPage } from "next";

import Layout from "../components/Layout/Layout";
import NewOperation from "../components/NewOperation/NewOperation";

const Review: NextPage = () => {
  return (
    <Layout title="Review">
      <NewOperation />
    </Layout>
  );
};

export default Review;
