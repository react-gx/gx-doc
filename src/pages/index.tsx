import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import style from "./index.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      title={`Welcome to Gx`}
      description="React and React Native library for managing global state"
    >
      <ToastContainer />
      <main className={style.main}>
        <div className={style.hero}>
          <div className={style.hero__container}>
            <h1 className={style.heroTitle}>
              The{" "}
              <span className={style.heroTitle_span}>
                Global State Management
              </span>{" "}
              Library for React and React Native
            </h1>
            <p className={style.heroSubtitle}>
              A lightweight, easy to use and performant library for managing
              global state.
            </p>
            <div className={style.heroButtons}>
              <Link to="/docs/intro">
                <span>Get Started</span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4062 5.875L24.6562 14.125C24.7812 14.25 24.87 14.3854 24.9225 14.5313C24.975 14.6771 25.0008 14.8333 25 15C25 15.1667 24.9737 15.3229 24.9212 15.4688C24.8687 15.6146 24.7804 15.75 24.6562 15.875L16.4062 24.125C16.1771 24.3542 15.8904 24.4738 15.5462 24.4838C15.2021 24.4938 14.9054 24.3742 14.6562 24.125C14.4062 23.8958 14.2758 23.6092 14.265 23.265C14.2542 22.9208 14.3742 22.6242 14.625 22.375L20.75 16.25H6.78125C6.42708 16.25 6.13 16.13 5.89 15.89C5.65 15.65 5.53041 15.3533 5.53125 15C5.53125 14.6458 5.65083 14.3487 5.89 14.1087C6.12916 13.8687 6.42624 13.7492 6.78125 13.75L20.75 13.75L14.625 7.625C14.3958 7.39583 14.2758 7.10417 14.265 6.75C14.2542 6.39583 14.3742 6.10417 14.625 5.875C14.8542 5.625 15.1458 5.5 15.5 5.5C15.8542 5.5 16.1562 5.625 16.4062 5.875Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("npm install @dilane3/gx");
                  copyToClipboard();
                }}
              >
                <span>npm install @dilane3/gx</span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33334 36.6667C7.41667 36.6667 6.63167 36.34 5.97834 35.6867C5.325 35.0333 4.99889 34.2489 5 33.3333V10H8.33334V33.3333H26.6667V36.6667H8.33334ZM15 30C14.0833 30 13.2983 29.6733 12.645 29.02C11.9917 28.3667 11.6656 27.5822 11.6667 26.6667V6.66666C11.6667 5.75 11.9933 4.965 12.6467 4.31166C13.3 3.65833 14.0844 3.33222 15 3.33333H30C30.9167 3.33333 31.7017 3.66 32.355 4.31333C33.0083 4.96666 33.3344 5.75111 33.3333 6.66666V26.6667C33.3333 27.5833 33.0067 28.3683 32.3533 29.0217C31.7 29.675 30.9156 30.0011 30 30H15ZM15 26.6667H30V6.66666H15V26.6667Z"
                    fill="#11314F"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
