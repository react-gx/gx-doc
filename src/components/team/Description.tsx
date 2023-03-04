import React from "react";
import style from "../../pages/about/index.module.css";
import themeStyle from "../../css/theme.module.css";
import { useColorMode } from "@docusaurus/theme-common";

export default function Description() {
  const { isDarkTheme } = useColorMode();

  return (
    <div className={`${style.teamIntro} ${isDarkTheme && themeStyle.team__intro}`}>
      <h1>Meet the Team</h1>
      <p>
        People who contribute to the development and maintenance of the GX
        system
      </p>
    </div>
  );
}
