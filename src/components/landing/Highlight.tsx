import React from "react";
import style from "../../pages/index.module.css";
import themeStyle from "../../css/theme.module.css";
import { useColorMode } from "@docusaurus/theme-common";

export default function Highlight() {
  const { isDarkTheme } = useColorMode();

  return (
    <div
      className={`${style.highlights} ${
        isDarkTheme && themeStyle.hightlights__container
      }`}
    >
      <div className={style.highlights__container}>
        <div
          className={`${style.highlightsCard} ${
            isDarkTheme && themeStyle.hightlights__card
          }`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17zM5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 0 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5 3.5 3.5 0 0 1 13.5 9H5a1 1 0 1 0 0 2z"
                fill="rgba(57,160,255,1)"
              />
            </svg>
          </div>
          <h2>Lightweight</h2>
          <p>
            The library is not heavy at all and not bulky. After installation,
            it doesn’t take space in your project.
          </p>
        </div>
        <div
          className={`${style.highlightsCard} ${
            isDarkTheme && themeStyle.hightlights__card
          }`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                fill="rgba(57,160,255,1)"
              />
            </svg>
          </div>
          <h2>Easy to use</h2>
          <p>
            Integrate Gx into your application is too simple, you just have to
            do some extra configuration.
          </p>
        </div>
        <div
          className={`${style.highlightsCard} ${
            isDarkTheme && themeStyle.hightlights__card
          }`}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M13 9h8L11 24v-9H4l9-15v9zm-2 2V7.22L7.532 13H13v4.394L17.263 11H11z"
                fill="rgba(57,160,255,1)"
              />
            </svg>
          </div>
          <h2>Performant</h2>
          <p>
            Too speed, the state update is done quickly after the action
            triggered by the user is done.
          </p>
        </div>
      </div>
    </div>
  );
}
