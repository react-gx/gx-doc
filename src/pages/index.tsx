import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome`}
      description="React and React Native library for managing global state"
      wrapperClassName="landingPage"
    >
      <main className="landingPage">
        <h1>Landing Page</h1>
      </main>
    </Layout>
  );
}
