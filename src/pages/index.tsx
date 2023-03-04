import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common"
import Layout from "@theme/Layout";
import style from "./index.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "../components/landing/Hero";
import Highlight from "../components/landing/Highlight";

export default function Home(): JSX.Element {
  const copyToClipboard = () =>
    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  
  return (
    <Layout
      title={`Welcome`}
      description="React and React Native library for managing global state"
      wrapperClassName="landingPage"
    >
      <ToastContainer />
      <main>
        <Hero onCopyToClipboard={copyToClipboard}/>

        <Highlight />
      </main>
    </Layout>
  );
}
